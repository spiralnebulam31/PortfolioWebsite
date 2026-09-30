"use client";

import { motion } from "framer-motion";
import { floatFromRightVariant } from "../../utils/motion.js";
import "./AstroPic.scss";

// Receives data fetched server-side by AstroPic.jsx (a Server Component) —
// keeps the scroll-reveal animation, which needs a client boundary. `data`
// has the same shape whichever source AstroPic.jsx uses.
const AstroPicContent = ({ data }) => {
  // Nothing worth showing (e.g. the source is down) — skip the section
  // rather than render an empty heading.
  if (!data) {
    return null;
  }

  return (
    <section id="astro-pic" className="astro-pic">
      <div className="astro-pic__section">
        <div className="astro-pic__container">
          <p className="astro-pic__eyebrow">James Webb Space Telescope</p>
          <h2 className="astro-pic__heading">
            Picture of the Month
          </h2>

          <motion.div
            className="astro-pic__content"
            variants={floatFromRightVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="astro-pic__result">
              <h3 className="astro-pic__title">
                {data.title}
              </h3>
              {data.date && (
                <p className="astro-pic__date">{data.date}</p>
              )}
              <div className="astro-pic__image-row">
                <a
                  href={data.fullImageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${data.title}: open the full-resolution image in a new tab`}
                  className="astro-pic__image-link"
                >
                  <img
                    src={data.imageUrl}
                    alt={data.imageAlt}
                    className="astro-pic__image"
                  />
                </a>
              </div>
              <div className="astro-pic__details">
                {data.explanation.map((paragraph, index) => (
                  <p key={index} className="astro-pic__explanation">
                    {paragraph}
                  </p>
                ))}
                {data.credit && (
                  <p className="astro-pic__meta">
                    <span className="astro-pic__meta-label">Credit:</span>{" "}
                    {data.credit}
                  </p>
                )}
                <p className="astro-pic__meta">
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="astro-pic__source-link"
                  >
                    Read the full story
                  </a>
                </p>
                <p className="astro-pic__meta">
                  <span className="astro-pic__meta-label">Source:</span>{" "}
                  <a
                    href={data.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="astro-pic__source-link"
                  >
                    {data.sourceName}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AstroPicContent;
