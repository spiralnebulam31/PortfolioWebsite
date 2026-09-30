import {
  photo1,
  photo2,
  photo3,
  photo4,
} from "../assets";

// Shows the astronomy picture section (and its navbar link). It now uses
// ESA/Webb's Picture of the Month — see components/AstroPic/AstroPic.jsx for
// why NASA's APOD was switched off. Set to false to hide it again.
export const showAstroPic = true;

const allNavLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "astro-pic",
    title: "Astro Pic",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const navLinks = allNavLinks.filter(
  (link) => showAstroPic || "astro-pic" !== link.id
);

const profilePhotos = [
  {
    index: 1,
    alt: "Anastasia smiling, with the sea behind her",
    src: photo1,
  },
  {
    index: 2,
    alt: "Anastasia standing next to the opening slide of her talk \"Building Websites with WordPress\" at Chelmsford Tech Meetup",
    src: photo2,
  },
  {
    index: 3,
    alt: "Anastasia doing the wheel yoga pose on a beach at low tide",
    src: photo3,
  },
  {
    index: 4,
    alt: "Anastasia sitting on a rock by a waterfall and a clear mountain pool during a hiking trip",
    src: photo4,
  },
];

// Skills shown as a word cloud (Skills.jsx). `weight` sets the word size:
// 3 = core, everyday skills; 2 = regular; 1 = used on some projects.
const skills = [
  { name: "WordPress", weight: 3, url: "https://wordpress.org/" },
  { name: "PHP", weight: 3, url: "https://www.php.net/" },
  { name: "JavaScript", weight: 3, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React.js", weight: 3, url: "https://react.dev/" },
  { name: "HTML", weight: 3, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", weight: 3, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Gutenberg Blocks", weight: 3, url: "https://developer.wordpress.org/block-editor/" },
  { name: "Block Themes", weight: 3, url: "https://developer.wordpress.org/themes/block-themes/" },
  { name: "SCSS", weight: 3, url: "https://sass-lang.com/" },
  { name: "TypeScript", weight: 2, url: "https://www.typescriptlang.org/" },
  { name: "Next.js", weight: 3, url: "https://nextjs.org/" },
  { name: "React Native", weight: 2, url: "https://reactnative.dev/" },
  { name: "Node.js", weight: 2, url: "https://nodejs.org/" },
  { name: "Tailwind CSS", weight: 2, url: "https://tailwindcss.com/" },
  { name: "Framer Motion", weight: 2, url: "https://motion.dev/" },
  { name: "Git", weight: 2, url: "https://git-scm.com/" },
  { name: "Interactivity API", weight: 2, url: "https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/" },
  { name: "WooCommerce", weight: 2, url: "https://woocommerce.com/" },
  { name: "ACF", weight: 2, url: "https://www.advancedcustomfields.com/" },
  { name: "GitHub Actions", weight: 2, url: "https://github.com/features/actions" },
  { name: "Leaflet", weight: 2, url: "https://leafletjs.com/" },
  { name: "React Router", weight: 1, url: "https://reactrouter.com/" },
  { name: "Express.js", weight: 1, url: "https://expressjs.com/" },
  { name: "MongoDB", weight: 1, url: "https://www.mongodb.com/" },
  { name: "SQL", weight: 1, url: "https://developer.mozilla.org/en-US/docs/Glossary/SQL" },
  { name: "Supabase", weight: 1, url: "https://supabase.com/" },
  { name: "Bootstrap", weight: 1, url: "https://getbootstrap.com/" },
  { name: "Material UI", weight: 1, url: "https://mui.com/" },
  { name: "Jest", weight: 1, url: "https://jestjs.io/" },
  { name: "Playwright", weight: 1, url: "https://playwright.dev/" },
  { name: "Testing Library", weight: 1, url: "https://testing-library.com/" },
  { name: "Photoshop", weight: 1, url: "https://www.adobe.com/products/photoshop.html" },
];


// Names that get linked automatically wherever they appear in project and
// journey text (see utils/linkify.jsx).
const natassaPortfolio = "https://www.chaptersbyanastasia.dev/";

const peopleLinks = {
  "Anastasia (Natassa) Tsapanidou Kornilaki": natassaPortfolio,
  "Natassa Tsapanidou Kornilaki": natassaPortfolio,
  Natassa: natassaPortfolio,
  Maria: "https://www.mariatelikiozoglou.com/",
};

export { profilePhotos, skills, peopleLinks };
