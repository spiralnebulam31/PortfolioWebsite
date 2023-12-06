import {
  // profilePhoto1,
  profilePhoto2,
  // profilePhoto3,
  typescript,
  javascript,
  react,
  reactRouter,
  html,
  css,
  tailwind,
  bootstrap,
  framerMotion,
  node,
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
    id: "contact",
    title: "Contact",
  },
];

const profilePhotos = [
  // {
  //   index: 0,
  //   alt: "profile photo 1",
  //   image: profilePhoto1,
  // },
  {
    index: 1,
    alt: "profile photo",
    image: profilePhoto2,
  },
  // {
  //   index: 2,
  //   alt: "profile photo 3",
  //   image: profilePhoto3,
  // }
];

const aboutMeText = [
  "I'm a full-stack developer with a passion for creating meaningful and accessible web applications. I enjoy working with React.js, Node.js and MongoDB, and I'm curious and eager to learn new technologies. I use my imagination and creativity everywhere in my life and I'm always looking for new ways to express myself. Crafting beautiful and functional websites is one of my favorite ways to do so.",
  "My journey has been a diverse and rewarding one, taking me through various experiences such as studying mathematics, working at customer service, engaging in private tutoring and volunteering. My coding journey started with a highschool programming class, where I was introduced to the basics of algorithmic thinking. One of my most profound experiences has been my time as a caregiver for vulnerable adults, which illuminated my innate desire to help others. It has also helped me develop my empathy and compassion; I now bring those qualities to my projects by following a people-first approach.",
  "Beyond my work, I enjoy exploring new places, as well as gazing up at the night sky. I like delving into local history, I appreciate architectural wonders and indulge in amateur astronomy. I've found immense joy and fulfillment in my long-standing involvement in choirs, seeking out new vocal ensembles in every place I call home. Additionally, my transformative journey into yoga has had a profound impact on both my mind and body. The positive energy I derive from choir singing and yoga serves as a healing force, enriching my life further.",
  "Nature, in all its beauty, feels like a second home to me. Whether I'm following mountain trails or tending to my beloved flower and vegetable garden, I relish every moment spent outdoors.",
  "As a web developer, I'm aiming to keep helping people and organisations fulfill significant goals, as well as promote accessibility and sustainability, as I believe such causes make the world more inclusive and our planet healthier."
];

const techStack = [
  {
    name: "TypeScript",
    icon: typescript,
    alt: "TypeScript icon",
  },
  {
    name: "JavaScript",
    icon: javascript,
    alt: "JavaScript icon",
  },
  {
    name: "React.js",
    icon: react,
    alt: "React.js icon",
  },
  {
    name: "React Router",
    icon: reactRouter,
    alt: "React Router icon",
  },
  {
    name: "Node.js",
    icon: node,
    alt: "Node.js icon",
  },
  {
    name: "Express.js",
    icon: express,
    alt: "Express.js icon",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    alt: "MongoDB icon",
  },
  {
    name: "PostreSQL",
    icon: postgresql,
    alt: "PostreSQL icon",
  },
  {
    name: "Supabase",
    icon: supabase,
    alt: "Supabase icon",
  },
  {
    name: "HTML",
    icon: html,
    alt: "HTML icon",
  },
  {
    name: "CSS",
    icon: css,
    alt: "CSS icon",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    alt: "Tailwind CSS icon",
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    alt: "Bootstrap icon",
  },
  {
    name: "Framer Motion",
    icon: framerMotion,
    alt: "Framer Motion icon",
  },
  {
    name: "Git",
    icon: git,
    alt: "Git icon",
  },
  {
    name: "Figma",
    icon: figma,
    alt: "Figma icon",
  },
  {
    name: "Photoshop",
    icon: photoshop,
    alt: "Photoshop icon",
  },
  {
    name: "Jest",
    icon: jest,
    alt: "Jest icon",
  },
  {
    name: "Playwright",
    icon: playwright,
    alt: "Playwright icon",
  },
  {
    name: "Testing Library",
    icon: testingLibrary,
    alt: "Testing Library icon",
  },
];

export { profilePhotos, aboutMeText, techStack };
