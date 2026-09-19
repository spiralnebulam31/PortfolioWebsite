import {
    lifeGoats,
    // portfolio,
    gardenGenie,
    goldenKeys,
    lightABeacon,
    greekArtMap,
} from "../assets/index.js";

// A single unified list, in display order. Every entry has at least
// `name`/`image`/`description.summary`; the richer fields (challenge,
// solution, learnings, roadmap, techStack, date, repoLink(s), websiteLink,
// status) are optional — ProjectModal only renders the sections that exist,
// so a lighter entry (e.g. Golden Keys) just gets a shorter popup instead of
// needing invented detail.
export const projects = [
    {
      name: "Garden Genie",
      image: {
        src: gardenGenie,
        alt: "Garden Genie",
      },
      description: {
        summary:
          "During our final full stack project at the School of Code, my team of six and I had the opportunity to address a real-world problem and plan, design and develop a full-stack web app.",
        challenge:
          "Simplify gardening for individuals, addressing the common barriers that often deter people from starting their gardening journey.",
        solution:
          "An app that delivers personalised plant recommendations based on user preferences. On the frontend, we harnessed the power of React for its code reusability, state management, and seamless deployment, to create a high-functionint frontend. For the backend, we efficiently managed plant data using Node, Express, and MongoDB in a non-relational database.",
        learnings: [
          "This project allowed me to recognize the immense value of diverse viewpoints within our team. The mosaic of perspectives fostered mutual learning, creating an environment of open dialogue and collaboration. This dynamic synergy was instrumental in shaping my approach to planning, managing, and successfully delivering a Minimum Viable Product (MVP) within a team.",
          "I contributed to the project by participating in the entire planning and design journey, then worked on the structure and functionality of the React frontend. I also made sure the team followed web accessibility standards throughout the app development.",
        ],
      },
      date: "June 2023 - July 2023",
      techStack: [
        "React.js",
        "React Router",
        "CSS",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "GitHub",
        "Testing Library",
        "Figma",
        "Canva",
      ],
      repoLink: "https://github.com/spiralnebulam31/M.A.S.H.E.D_Garden_Genie",
      repoLink2: "https://github.com/spiralnebulam31/GardenGenieBackend",
      websiteLink: "https://garden-genie.netlify.app/",
      status: "Complete",
    },
    {
      name: "Life Goats",
      image: {
        src: lifeGoats,
        alt: "Life Goats",
      },
      description: {
        summary:
          "Initially created to introduce an upcoming retreat, it has evolved into a platform that offers a variety of retreats and outdoor events, all designed to help individuals connect, and find balance and peace in their lives.",
        challenge:
          "Create a captivating website that elegantly presents the details of the Life Goats community, as well as the retreats and events they offer.",
        solution:
          "A responsive and accessible website that not only highlights the distinctive features of the location but also offers users a sneak peek into the promises and experiences awaiting them at the retreats.",
        learnings: [
          "I wanted to create a website that would capture the essence of the retreat, so I made sure to include a variety of images that would showcase the location's beauty and serenity.",
          "Thorough exploration of map options (including Google APIs, React Simple Maps, and map design options like Snazzy Maps and Mapbox) to ultimately opt for React Leaflet to create an interactive map showcasing key locations.",
          "After reseraching various libraries and tools, I decided to use the React useState hook and the Framer Motion animation library to create components like dropdown menus, a dynamic 'tab schedule' and expandable 'pricing cards'.",
          "Prioritising accessibility and responsiveness at every stage of development.",
          "Anticipating future growth, the app has been structured for effortless scalability, ensuring a seamless extension of its capabilities as the scale evolves."
        ],
        roadmap: [
          "Develop a server to facilitate user authentication, enabling a streamlined process for individuals to secure their spot at future events.",
          "Organise the photos and videos of the retreats and events in a database, allowing users to explore the experiences and memories of past events with ease.",
        ],
      },
      date: "October 2023 - Present",
      techStack: [
        "React.js",
        "React Router",
        "Vite",
        "Email.js",
        "TailwindCSS",
        "Framer Motion",
        "React Leaflet",
        "Galleria",
        "Chart.js",
        "GitHub",
        "Canva",
      ],
      repoLink: "https://github.com/spiralnebulam31/LifeGoats",
      websiteLink: "https://www.lifegoats.com/",
      status: "Complete, roadmap for future updates in progress",
    },
    {
      name: "Light A Beacon",
      image: {
        src: lightABeacon,
        alt: "Light a Beacon",
      },
      description: {
        summary:
          "A full-stack interactive map app that allows users to create and join local communities. Being created for Campfire Convention.",
      },
    },
    {
      name: "Greek Art Map",
      image: {
        src: greekArtMap,
        alt: "Greek Art Map",
      },
      description: {
        summary:
          "A bilingual (English/Greek) mobile app for discovering the locations where significant Greek artists, writers, and cultural figures lived or worked, focused on the city of Athens.",
        challenge:
          "Make Greek art and cultural history tangible and explorable in person, for both English and Greek speakers, rather than something only read about in a book.",
        solution:
          "An interactive map built with Expo and React Native where tapping a building surfaces the artists connected to it and links through to full illustrated biographies, alongside curated, story-driven walking routes with stop-by-stop navigation and a confetti celebration on completion.",
        learnings: [
          "Working with React Native and Expo for the first time, including native modules like react-native-maps and expo-location that go beyond what Expo Go supports, requiring proper development builds.",
          "Building a CSV-to-TypeScript data pipeline so building and artist content can be authored in spreadsheets and regenerated into strongly-typed data files, keeping content edits out of hand-written code.",
          "Implementing full bilingual support (English/Greek) end-to-end, including persisted language and theme preferences via AsyncStorage and React Context.",
          "Designing themed, light/dark-aware styles per screen and component to keep visual parity across both modes.",
        ],
        roadmap: [
          "Expand beyond Athens/Kolonaki to other cities and neighborhoods — the data model and city menu are already generic per-city/per-area.",
          "Wire up per-location audio narration into the map info panel.",
          "Flesh out remaining neighborhoods within Athens beyond Kolonaki.",
        ],
      },
      date: "November 2024 - Present",
      techStack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Expo Router",
        "React Native Maps",
        "React Context",
        "React Native Reanimated",
        "GitHub",
      ],
      repoLink: "https://github.com/spiralnebulam31/greek-art-map",
      status: "In progress",
    },
    {
      name: "The Golden Keys",
      image: {
        src: goldenKeys,
        alt: "The Golden Keys",
      },
      description: {
        summary:
          "Frontend development of a website that showcases the work, services, location and contact details of a locksmith business in Greece.",
      },
    },
  ];

  // Commented out (image asset removed) — see conversation history if this
  // ever needs to come back.
  // {
  //   name: "Portfolio Website",
  //   image: { src: portfolio, alt: "Portfolio Website" },
  //   description: {
  //     summary: "This website is my portfolio, where you can find information about me, my skills and my projects.",
  //     challenge: "Create a digital space that reflects my personality and showcases my skills and projects.",
  //     solution: "A responsive and accessible website that offers a smooth user experience.",
  //     learnings: [
  //       "I wanted to make sure that my personal website was a true reflection of my personality and skills. Along the way, I learned how to use React Chrono, Framer Motion and React Tilt. I also gained a deeper understanding of TailwindCSS.",
  //       "A portfolio website is never really complete. It's a dynamic space that evolves with the developer/artist and I'm excited to continue adding new features and functionalities to it.",
  //     ],
  //     roadmap: ["Turn the project section into pop up cards, allowing users to delve deeper into each project's details more smoothly."],
  //   },
  //   date: "Started August 2023",
  //   techStack: ["React.js", "React Chrono", "Email.js", "TailwindCSS", "Framer Motion", "React Tilt", "GitHub", "Canva", "Node.js", "Express.js", "MongoDB", "NASA API"],
  //   repoLink: "https://github.com/spiralnebulam31/PortfolioWebsite",
  //   websiteLink: "https://www.spiralnebulam31.com/",
  //   status: "Always in progress",
  // },
