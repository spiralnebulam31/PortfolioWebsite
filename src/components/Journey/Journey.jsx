"use client";

import { motion } from "framer-motion";
import { floatFromLeftVariant } from "../../utils/motion.js";
import { Chrono } from "react-chrono";
import { timelineItems } from "../../constants/timeline.js";
import "./Journey.scss";

const Journey = () => {

  return (
    <section id="journey" className="journey">
      <div className="journey__section">
        <div className="journey__container">
            <p className="journey__eyebrow">My coding</p>
            <h2 className="journey__heading">
              Journey
            </h2>

          <div className="journey__content">

<motion.div className="journey__timeline-card"
variants={floatFromLeftVariant} initial="initial" whileInView="animate">
            <Chrono
              items={timelineItems}
              mode="VERTICAL_ALTERNATING"
              showSingleMode
              itemWidth={400}
              itemHeight={500}
              cardWidth={550}
              cardHeight={200}
              focusActiveItemOnLoad
              scrollable
              theme={{
                primary: "#3b0764",
                secondary: "#a855f7",
                cardBgColor: "#CCB2FF",
                cardTitleColor: "#3b0764",
                cardDetailsColor: "#3b0764",
                iconBackgroundColor: "#CCB2FF",
                titleColorActive: "#83F8F5",
                titleColor: "#3b0764",
              }}
            />
          </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;
