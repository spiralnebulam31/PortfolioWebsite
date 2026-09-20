"use client";

import { motion } from "framer-motion";
import { floatFromLeftVariant } from "../../utils/motion.js";
import { timelineItems } from "../../constants/timeline.js";
import Timeline from "./Timeline.jsx";
import "./Journey.scss";

const Journey = () => {

  return (
    <section id="journey" className="journey">
      <div className="journey__section">
        <div className="journey__container">
          <div className="journey__title-row">
            <p className="journey__eyebrow">My coding</p>
            <h2 className="journey__heading">
              Journey
            </h2>
          </div>

          <div className="journey__content">

<motion.div className="journey__timeline-wrap"
variants={floatFromLeftVariant} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <Timeline items={timelineItems} />
          </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;
