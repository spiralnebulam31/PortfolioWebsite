import { peopleLinks } from "../constants/constants.js";

// Longest names first, so "Natassa Tsapanidou Kornilaki" is matched whole
// instead of stopping at "Natassa".
const names = Object.keys(peopleLinks).sort((a, b) => b.length - a.length);
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const namePattern = new RegExp(`(${names.map(escapeRegExp).join("|")})`, "g");

// Turns any name listed in `peopleLinks` into a link inside plain data text
// (project descriptions, timeline entries), so the data files can stay as
// simple strings.
export const linkify = (text, linkClassName) => {
  if ("string" !== typeof text) {
    return text;
  }

  return text.split(namePattern).map((part, index) =>
    peopleLinks[part] ? (
      <a
        key={index}
        href={peopleLinks[part]}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {part}
      </a>
    ) : (
      part
    )
  );
};
