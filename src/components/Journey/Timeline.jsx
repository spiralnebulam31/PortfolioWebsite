"use client";

import { useEffect, useRef } from "react";
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

// A horizontally scrollable timeline: a connecting line runs behind each
// item's marker dot, and items fade/scale based on how close they are to the
// track's visual center as the user scrolls (mouse wheel, trackpad, touch
// drag, keyboard, or the prev/next buttons all just move native scroll
// position — there's one source of truth). Opacity never drops to fully
// transparent and nothing is removed from the DOM, so the fade is a purely
// visual enhancement that never hides content from assistive tech.
const Timeline = ({ items }) => {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let frame = null;

    const updateProximities = () => {
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
      const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      track.style.setProperty("--timeline-progress", progress.toFixed(4));
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(updateProximities);
    };

    updateProximities();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
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
          <span className="timeline__line" aria-hidden="true">
            <span className="timeline__line-progress" />
          </span>
          {items.map((item, index) => (
            <li
              className="timeline__item"
              key={item.title + index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              <span className="timeline__dot" aria-hidden="true" />
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
        aria-label="Scroll to later milestones"
      >
        <ChevronIcon direction="next" className="timeline__nav-icon" />
      </button>
    </div>
  );
};

export default Timeline;
