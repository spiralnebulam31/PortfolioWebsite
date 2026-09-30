"use client";

import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";
import { skills } from "../../constants/constants.js";
import "./Skills.scss";

// Spreads each size evenly through the whole cloud, so big, medium and
// small words stay mixed from the first row to the last — however many of
// each there are. Every word gets a position between 0 and 1 based on its
// place within its own size group, and the cloud is ordered by that.
const WEIGHT_ORDER = { 3: 0, 1: 1, 2: 2 };

const arrangeCloud = (items) => {
  const groups = { 1: [], 2: [], 3: [] };
  items.forEach((item) => groups[item.weight].push(item));

  return Object.values(groups)
    .flatMap((group) =>
      group.map((item, index) => ({ item, position: (index + 0.5) / group.length }))
    )
    .sort((a, b) => a.position - b.position || WEIGHT_ORDER[a.item.weight] - WEIGHT_ORDER[b.item.weight])
    .map(({ item }) => item);
};

// Color tone per word, rotated by one extra step every four words — a plain
// index % 4 could line up with the size pattern and give each size one color.
const toneFor = (index) => (index + Math.floor(index / 4)) % 4;

const cloud = arrangeCloud(skills);

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <motion.div className="skills__section">
        <div className="skills__container">
          <motion.div variants={textVariant()}>
            <p className="skills__eyebrow">
              These are
            </p>
            <h2 className="skills__heading">
              My Tech Skills
            </h2>
          </motion.div>

          <ul className="skills__cloud">
            {cloud.map((skill, index) => (
              <motion.li
                key={skill.name}
                className="skills__cloud-item"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`skills__word skills__word--weight-${skill.weight} skills__word--tone-${toneFor(index)}`}
                >
                  {skill.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
