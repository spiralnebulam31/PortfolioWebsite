import {
  photo1,
  photo2,
  photo3,
  photo4,
  typescript,
  javascript,
  react,
  next,
  reactRouter,
  html,
  css,
  tailwind,
  bootstrap,
  mui,
  framerMotion,
  vite,
  node,
  wordpress,
  php,
  express,
  mongodb,
  postgresql,
  supabase,
  jest,
  playwright,
  testingLibrary,
  git,
  figma,
  photoshop,
} from "../assets";

export const navLinks = [
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

const techStack = [
  {
    name: "JavaScript",
    icon: javascript,
    alt: "JavaScript icon",
    url: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: typescript,
    alt: "TypeScript icon",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "HTML",
    icon: html,
    alt: "HTML icon",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: css,
    alt: "CSS icon",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    alt: "Tailwind CSS icon",
    url: "https://tailwindcss.com/",
  },
  {
    name: "React.js",
    icon: react,
    alt: "React.js icon",
    url: "https://reactjs.org/",
  },
  {
    name: "React Router",
    icon: reactRouter,
    alt: "React Router icon",
    url: "https://reactrouter.com/",
  },
  {
    name: "Next.js",
    icon: next,
    alt: "Next.js icon",
    url: "https://nextjs.org/",
  },
  {
    name: "Vite",
    icon: vite,
    alt: "Vite icon",
    url: "https://vitejs.dev/",
  },
  {
    name: "Node.js",
    icon: node,
    alt: "Node.js icon",
    url: "https://nodejs.org/",
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    alt: "Bootstrap icon",
    url: "https://getbootstrap.com/",
  },
  {
    name: "MaterialUI",
    icon: mui,
    alt: "Material-UI icon",
    url: "https://mui.com/",
  },
  {
    name: "Framer Motion",
    icon: framerMotion,
    alt: "Framer Motion icon",
    url: "https://www.framer.com/motion/",
  },
  {
    name: "WordPress",
    icon: wordpress,
    alt: "WordPress icon",
    url: "https://en-gb.wordpress.org/",
  },
  {
    name: "PHP",
    icon: php,
    alt: "PHP icon",
    url: "https://www.php.net/",
  },
  {
    name: "Git",
    icon: git,
    alt: "Git icon",
    url: "https://git-scm.com/",
  },
  {
    name: "Express.js",
    icon: express,
    alt: "Express.js icon",
    url: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    alt: "MongoDB icon",
    url: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    alt: "PostgreSQL icon",
    url: "https://www.postgresql.org/",
  },
  {
    name: "Supabase",
    icon: supabase,
    alt: "Supabase icon",
    url: "https://supabase.com/",
  },
  {
    name: "Figma",
    icon: figma,
    alt: "Figma icon",
    url: "https://www.figma.com/",
  },
  {
    name: "Photoshop",
    icon: photoshop,
    alt: "Photoshop icon",
    url: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Jest",
    icon: jest,
    alt: "Jest icon",
    url: "https://jestjs.io/",
  },
  {
    name: "Playwright",
    icon: playwright,
    alt: "Playwright icon",
    url: "https://playwright.dev/",
  },
  {
    name: "Testing Library",
    icon: testingLibrary,
    alt: "Testing Library icon",
    url: "https://testing-library.com/",
  },
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

export { profilePhotos, techStack, peopleLinks };
