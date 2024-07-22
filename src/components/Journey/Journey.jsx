import { motion } from "framer-motion";
import { styles } from "../../styles.js";
import { floatFromLeftVariant } from "../../utils/motion.js";
import { Chrono } from "react-chrono";
import { timelineItems } from "../../constants/timeline.js";

const Journey = () => {

  return (
    <section id="journey" className="overflow-hidden">
      <div className="bg-background1 relative z-1 bg-cover w-full top-0 left-0 right-0 bottom-0 pt-5 pb-24 sm:pb-20">
        <div className="mx-auto px-5">
            <p className={styles.sectionSubText + styles.paddingX}>My coding</p>
            <h2 className={styles.sectionHeadText + styles.paddingX}>
              Journey
            </h2>

          <div className="flex flex-wrap justify-center w-[90%] md:w-full mx-auto mt-10 sm:mt-0">

<motion.div className="flex flex-wrap justify-center h-[85vh] bg-gradient-to-b from-cyan-500 to-purple-300 rounded-xl shadow-card"
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
