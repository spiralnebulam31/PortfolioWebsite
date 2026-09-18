"use client";

import { motion } from "framer-motion";
import { floatFromRightVariant } from "../../utils/motion.js";
import "./AstroPic.scss";

// Receives data fetched server-side by AstroPic.jsx (a Server Component) —
// keeps the scroll-reveal animation, which needs a client boundary.
const AstroPicContent = ({ data }) => {
  return (
    <section id="astro-pic" className="astro-pic">
      <div className="astro-pic__section">
        <div className="astro-pic__container">
          <p className="astro-pic__eyebrow">Daily NASA</p>
          <h2 className="astro-pic__heading">
            Astronomy Picture
          </h2>

          <motion.div
            className="astro-pic__content"
            variants={floatFromRightVariant}
            initial="initial"
            whileInView="animate"
          >
            {data && (
              <div className="astro-pic__result">
                <h2 className="astro-pic__title">
                  {data.title}
                </h2>
                <div className="astro-pic__image-row">
                <a
                  href={data.hdurl}
                  target="_blank"
                  rel="noreferrer"
                  alt="Astronomy Picture of the Day Link"
                  className="astro-pic__image-link"
                >
                  <img
                    src={data.url}
                    alt={data.title}
                    className="astro-pic__image"
                  />
                </a>
                </div>
                <div className="astro-pic__details">
                  <p className="astro-pic__explanation">{data.explanation}</p>
                  <p className="astro-pic__meta">
                    <span className="astro-pic__meta-label">Copyright:</span>{" "}
                    {data.copyright}
                  </p>
                  <p className="astro-pic__meta">
                    <span className="astro-pic__meta-label">
                      NASA "Astronomy Picture of the day" source:{" "}
                    </span>{" "}
                    <a
                      href="https://apod.nasa.gov/apod/astropix.html"
                      target="_blank"
                      rel="noreferrer"
                      className="astro-pic__source-link"
                    >
                      click here
                    </a>
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AstroPicContent;
