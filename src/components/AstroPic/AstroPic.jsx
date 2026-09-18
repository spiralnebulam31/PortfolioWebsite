import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  floatFromRightVariant,
} from "../../utils/motion.js";
import Axios from "axios";
import "./AstroPic.scss";

const AstroPic = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [astroPicData, setAstroPicData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAstroPic = async () => {
      try {
        // const response = await Axios.get(
        //   "http://localhost:3001/astro-pic"
        // );
        const response = await Axios.get(
          "https://portfoliowebsite-31rf.onrender.com/astro-pic"
        );
        console.log(response.data);
        setAstroPicData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Astronomy Picture of the Day:", error);
        setLoading(false);
      }
    };
    getAstroPic();
  }, []);

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
            ref={ref}
            // animate={isInView ? "animate" : "initial"}
            whileInView="animate"
          >
            {/* <p className="text-center text-secondary"><span className="underline">Note:</span> If you can't see the astro pic of the day, please give it a minute to complete its stellar journey to your screen!</p> */}
            {loading ? (
              <div className="astro-pic__loading">
                <div className="astro-pic__spinner"></div>
              </div>
            ) : (
              astroPicData && (
                <div className="astro-pic__result">
                  <h2 className="astro-pic__title">
                    {astroPicData.title}
                  </h2>
                  <div className="astro-pic__image-row">
                  <a
                    href={astroPicData.hdurl}
                    target="_blank"
                    rel="noreferrer"
                    alt="Astronomy Picture of the Day Link"
                    className="astro-pic__image-link"
                  >
                    <img
                      src={astroPicData.url}
                      alt={astroPicData.title}
                      className="astro-pic__image"
                    />
                  </a>
                  </div>
                  <div className="astro-pic__details">
                    <p className="astro-pic__explanation">{astroPicData.explanation}</p>
                    <p className="astro-pic__meta">
                      <span className="astro-pic__meta-label">Copyright:</span>{" "}
                      {astroPicData.copyright}
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
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AstroPic;
