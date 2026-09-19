"use client";

import { useEffect, useRef, useState } from "react";
import { rocket } from "../../assets/index.js";
import "./Timeline.scss";

const ChevronIcon = ({ direction, className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points={direction === "prev" ? "15 6 9 12 15 18" : "9 6 15 12 9 18"} />
  </svg>
);

const WAVE_AMPLITUDE = 20; // px, how far the path swings above/below neutral
const WAVE_PHASE_STEP = Math.PI / 4; // ~2.5 full wave cycles across 20 items
const MARKER_ZONE_HEIGHT = 64; // px — must cover the full wave swing + dot size

// Converts a series of [x, y] points into a smooth SVG path "d" string via
// Catmull-Rom-to-Bezier interpolation, so the curve passes exactly through
// every point — i.e. through every marker dot — rather than just near it.
const smoothPathFromPoints = (points) => {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0][0]},${points[0][1]}`;

  let d = `M ${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2[0]},${p2[1]}`;
  }
  return d;
};

// A horizontally scrollable timeline: a gently curved line runs through each
// item's marker dot (a wave, not a straight line), and a rocket travels
// along it tracking scroll progress — as if it's the one drawing the trail
// behind it. Items fade/scale based on how close they are to the track's
// visual center as the user scrolls (mouse wheel, trackpad, touch drag,
// keyboard, or the prev/next buttons all just move native scroll position —
// there's one source of truth). Opacity never drops to fully transparent and
// nothing is removed from the DOM, so the fade is a purely visual
// enhancement that never hides content from assistive tech.
const Timeline = ({ items }) => {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const markerRefs = useRef([]);
  const svgRef = useRef(null);
  const pathBgRef = useRef(null);
  const pathProgressRef = useRef(null);
  const pathLengthRef = useRef(0);
  const rocketWrapRef = useRef(null);
  const rocketRef = useRef(null);
  const lastProgressRef = useRef(0);
  const lastDirectionRef = useRef(1); // 1 = forward/right, -1 = backward/left
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Layout pass: positions each dot along the wave and draws the SVG path
  // through them. Doesn't depend on scroll position, only on rendered
  // layout, so it only needs to re-run on mount/resize.
  useEffect(() => {
    const track = trackRef.current;
    const svg = svgRef.current;
    if (!track || !svg) return undefined;

    const layout = () => {
      const points = itemRefs.current.map((item, index) => {
        const waveY = WAVE_AMPLITUDE * Math.sin(index * WAVE_PHASE_STEP);
        const centerX = item ? item.offsetLeft + item.offsetWidth / 2 : 0;
        const centerY = MARKER_ZONE_HEIGHT / 2 + waveY;

        const marker = markerRefs.current[index];
        if (marker) {
          marker.style.setProperty("--wave-y", `${waveY.toFixed(2)}px`);
        }

        return [centerX, centerY];
      });

      const contentWidth = track.scrollWidth;
      svg.setAttribute("viewBox", `0 0 ${contentWidth} ${MARKER_ZONE_HEIGHT}`);
      svg.style.width = `${contentWidth}px`;

      const d = smoothPathFromPoints(points);
      if (pathBgRef.current) pathBgRef.current.setAttribute("d", d);
      if (pathProgressRef.current) {
        pathProgressRef.current.setAttribute("d", d);
        const length = pathProgressRef.current.getTotalLength();
        pathLengthRef.current = length;
        pathProgressRef.current.style.strokeDasharray = `${length}`;
        pathProgressRef.current.style.strokeDashoffset = `${length}`;
      }
    };

    layout();
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, [items.length]);

  // Scroll pass: per-item proximity fade/scale, the line's "drawn" progress,
  // the rocket's position/rotation along the path, and nav button disabling.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let frame = null;

    const update = () => {
      frame = null;
      const trackRect = track.getBoundingClientRect();
      const centerX = trackRect.left + trackRect.width / 2;
      const maxDistance = trackRect.width / 2 || 1;

      itemRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(itemCenter - centerX);
        const proximity = 1 - Math.min(distance / maxDistance, 1);
        el.style.setProperty("--proximity", proximity.toFixed(3));
      });

      const maxScroll = track.scrollWidth - track.clientWidth;

      const path = pathProgressRef.current;
      const pathLength = pathLengthRef.current;
      if (path && pathLength) {
        // The rocket needs to sit on whatever point of the curve is
        // currently at the viewport's visual center — the same "center"
        // the proximity fade above uses — not simply a fixed fraction of
        // the path's arc length. A wavy path's X-coordinate isn't a linear
        // function of arc length, so those two drift apart away from the
        // ends, landing the rocket off to the side of the actually-centered
        // dot. Binary-search along the path (monotonic in X, since the wave
        // never doubles back horizontally) for the point whose X matches.
        const targetX = track.scrollLeft + track.clientWidth / 2;
        let low = 0;
        let high = pathLength;
        for (let i = 0; i < 24; i++) {
          const mid = (low + high) / 2;
          if (path.getPointAtLength(mid).x < targetX) {
            low = mid;
          } else {
            high = mid;
          }
        }
        const at = (low + high) / 2;
        const point = path.getPointAtLength(at);

        // Drawn up to exactly where the rocket is, so the two stay in sync.
        path.style.strokeDashoffset = `${pathLength - at}`;

        // Only update the facing direction on a real scroll delta — right
        // at the boundaries (or between frames with no movement) the delta
        // is ~0, and we want the rocket to keep facing whichever way it was
        // last actually headed rather than flicker.
        const delta = at - lastProgressRef.current;
        if (Math.abs(delta) > 0.01) {
          lastDirectionRef.current = delta > 0 ? 1 : -1;
        }
        lastProgressRef.current = at;

        if (rocketWrapRef.current && rocketRef.current) {
          const ahead = path.getPointAtLength(Math.min(at + 1, pathLength));
          const behind = path.getPointAtLength(Math.max(at - 1, 0));
          // Tangent of the path itself (its natural left-to-right heading) —
          // flipped 180° when currently scrolling backward, so the rocket
          // always faces the direction it's actually travelling instead of
          // flying backward along a forward-facing heading.
          const tangentAngle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * (180 / Math.PI);
          const facingAngle = lastDirectionRef.current === 1 ? tangentAngle : tangentAngle + 180;

          // Position (instant, no transition — must track scroll 1:1) lives
          // on the wrapper; rotation (smoothly transitioned in CSS) lives on
          // the image, so flipping direction doesn't add lag to positioning.
          rocketWrapRef.current.style.transform = `translate(${point.x}px, ${point.y}px) translate(-50%, -50%)`;
          rocketRef.current.style.transform = `rotate(${facingAngle}deg)`;
        }
      }

      setAtStart(track.scrollLeft <= 1);
      setAtEnd(track.scrollLeft >= maxScroll - 1);
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(update);
    };

    update();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  // Click-and-drag panning for mouse users — desktop browsers don't offer
  // this natively (unlike touch, which already pans via native scrolling,
  // left untouched here since these are plain "mouse*" events and touch
  // input never fires them).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const onMouseDown = (event) => {
      isDragging = true;
      startX = event.pageX;
      startScrollLeft = track.scrollLeft;
      track.classList.add("timeline__track--dragging");
      // Stops native text selection / image-drag-ghost from starting mid-gesture.
      event.preventDefault();
    };

    const onMouseMove = (event) => {
      if (!isDragging) return;
      track.scrollLeft = startScrollLeft - (event.pageX - startX);
    };

    const stopDragging = () => {
      isDragging = false;
      track.classList.remove("timeline__track--dragging");
    };

    track.addEventListener("mousedown", onMouseDown);
    // Listen on window, not just the track, so dragging keeps working even
    // if the cursor slips outside the track mid-drag — it only stops on
    // mouseup, matching how drag-to-pan normally feels.
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDragging);

    return () => {
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, []);

  const scrollByDirection = (direction) => {
    const track = trackRef.current;
    const firstItem = itemRefs.current[0];
    if (!track || !firstItem) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const step = firstItem.getBoundingClientRect().width + 64;

    track.scrollBy({
      left: direction * step,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="timeline">
      <button
        type="button"
        className="timeline__nav timeline__nav--prev"
        onClick={() => scrollByDirection(-1)}
        disabled={atStart}
        aria-label="Scroll to earlier milestones"
      >
        <ChevronIcon direction="prev" className="timeline__nav-icon" />
      </button>

      <div
        className="timeline__viewport"
        role="region"
        aria-label="Career timeline, scroll horizontally to explore"
      >
        <ol className="timeline__track" ref={trackRef} tabIndex={0}>
          <li className="timeline__path-item" aria-hidden="true">
            <svg ref={svgRef} className="timeline__path-svg" preserveAspectRatio="none">
              <path ref={pathBgRef} className="timeline__path-bg" />
              <path ref={pathProgressRef} className="timeline__path-progress" />
            </svg>
            <div ref={rocketWrapRef} className="timeline__rocket-wrap">
              <img ref={rocketRef} src={rocket} alt="" className="timeline__rocket" />
            </div>
          </li>
          {items.map((item, index) => (
            <li
              className="timeline__item"
              key={item.title + index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              <div
                className="timeline__marker"
                ref={(el) => {
                  markerRefs.current[index] = el;
                }}
              >
                <span className="timeline__dot" aria-hidden="true" />
              </div>
              <time className="timeline__date">{item.title}</time>
              <h3 className="timeline__event-title">{item.cardTitle}</h3>
              <p className="timeline__event-text">{item.cardDetailedText}</p>
            </li>
          ))}
        </ol>
      </div>

      <button
        type="button"
        className="timeline__nav timeline__nav--next"
        onClick={() => scrollByDirection(1)}
        disabled={atEnd}
        aria-label="Scroll to later milestones"
      >
        <ChevronIcon direction="next" className="timeline__nav-icon" />
      </button>
    </div>
  );
};

export default Timeline;
