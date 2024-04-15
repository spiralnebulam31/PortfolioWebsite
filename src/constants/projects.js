import {
    lifeGoats,
    onni,
    portfolio,
    gardenGenie,
    // bootcampersTreasureChest,
    lightABeacon,
    compassOfCare,
} from "../assets/index.js";

export const projects = [
    {
      name: "Life Goats",
      image: {
        src: lifeGoats,
        alt: "Life Goats",
      },
      description: {
        summary:
          "I was asked to create a website to introduce an upcoming retreat, to capture its unique characteristics and offerings.",
        challenge:
          "Create a captivating website that elegantly presents the details of the retreat - date, location and other essential information - providing users with a visually appealing and engaging experience.",
        solution:
          "A responsive and accessible website that not only highlights the distinctive features of the location but also offers users a sneak peek into the promises and experiences awaiting them at the retreat.",
        learnings: [
          "I wanted to create a website that would capture the essence of the retreat, so I made sure to include a variety of images that would showcase the location's beauty and serenity.",
          "Thorough exploration of map options (including Google APIs, React Simple Maps, and map design options like Snazzy Maps and Mapbox) to ultimately opt for React Leaflet to create an interactive map showcasing key locations.",
          "After reseraching various libraries and tools, I decided to use the React useState hook and the Framer Motion animation library to create components like dropdown menus, an image carousel, a dynamic 'tab schedule' and expandable 'pricing cards'.",
          "Prioritising accessibility and responsiveness at every stage of development.",
          "Anticipating future growth, the app has been structured for effortless scalability, ensuring a seamless extension of its capabilities as the scale evolves."
        ],
        roadmap: [
          "Develop a server to facilitate user authentication, enabling a streamlined process for individuals to secure their spot at future events."
        ],
      },
      date: "October 2023",
      techStack: [
        "React.js",
        "React Router",
        "Vite",
        "Email.js",
        "TailwindCSS",
        "Framer Motion",
        "React Leaflet",
        "React Tilt",
        "Chart.js",
        "GitHub",
        "Canva",
      ],
      repoLink: "https://github.com/AnastasiaAdamoudi/LifeGoats",
      websiteLink: "https://lifegoats.com/",
      status: "MVP complete, roadmap currently paused",
    },
    {
      name: "onni.",
      image: {
        src: onni,
        alt: "onni. Period App for Teens",
      },
      description: {
        summary:
          "I had the privilege of participating in an amazing hackathon by Women Who Code. For nine days, my fantastic team of designers, developers and content creators, took the challenge to plan and create a project for the Hackathon for Social Good 2023!",
        challenge:
          "Conventional period tracking apps are often saturated with medical jargon, creating an overwhelming experience for young girls.",
        solution:
          "A friendly, easily understood and engaging web app, designed specifically for pre-teens and teenagers to educate themselves about their periods in a straightforward and enjoyable manner.",
        learnings: [
          "When I joined the team, the initial planning had already taken place. The team was in need of a backend developer, so I eagerly took the role.",
          "My first step was to familiarize myself with EJS, a technology I hadn't previously explored. It brilliantly combines HTML with embedded JavaScript templates and I quickly recognized the practicality of this choice for the frontend developers of the team.",
          "My next step was implementing Passage into our app, a passwordless authentication solution that simplifies the registration and login process. Embracing new tools always comes with a learning curve, and I found this experience both interesting and beneficial.",
          "Once the backend functionality had been added by one of my team members and me, I ensured that our server's code was organized and transparent. This was crucial to make it easily comprehensible for every team member, enabling effective collaboration and progress.",
          "Last but not least, I helped the team adhere to web accessibility standards. We wanted to ensure that our app was not only informative but also inclusive and user-friendly for everyone.",
        ],
        roadmap: [
          "Revisit authentication options, aiming to introduce enhanced flexibility and a broader array of choices for members.",
          "Implement a feature that tracks users' learning progress and enable saving of articles to favorites for a more personalized experience."
        ],
      },
      date: "October 2023",
      techStack: [
        "HTML",
        "EJS",
        "JavaScript",
        "CSS",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Passage",
        "GitHub",
        "Figma",
        "Canva",
      ],
      repoLink: "https://github.com/AnastasiaAdamoudi/onni.-PeriodAppForTeens",
      websiteLink: "https://onni.vercel.app/",
      status: "MVP complete, roadmap currently paused",
    },
    {
      name: "Portfolio Website",
      image: {
        src: portfolio,
        alt: "Portfolio Website",
      },
      description: {
        summary:
          "This website is my portfolio, where you can find information about me, my skills and my projects.",
        challenge:
          "Create a digital space that reflects my personality and showcases my skills and projects.",
        solution:
          "A responsive and accessible website that offers a smooth user experience.",
        learnings: [
          "I wanted to make sure that my personal website was a true reflection of my personality and skills. Along the way, I learned how to use React Chrono, Framer Motion and React Tilt. I also gained a deeper understanding of TailwindCSS.",
          "A portfolio website is never really complete. It's a dynamic space that evolves with the developer/artist and I'm excited to continue adding new features and functionalities to it.",
        ],
        roadmap: [
          "Revisit the structure of the project, aiming to make it more scalable and easier to maintain.",
          "Turn the project section into pop up cards, allowing users to delve deeper into each project's details more smoothly.",
        ],
      },
      date: "Started August 2023",
      techStack: [
        "React.js",
        "React Chrono",
        "Email.js",
        "TailwindCSS",
        "Framer Motion",
        "React Tilt",
        "GitHub",
        "Canva",
      ],
      repoLink: "https://github.com/AnastasiaAdamoudi/PortfolioWebsite",
      websiteLink: "https://anastasiaadamoudi.com/",
      status: "Always in progress",
    },
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
      repoLink: "https://github.com/AnastasiaAdamoudi/M.A.S.H.E.D_Garden_Genie",
      repoLink2: "https://github.com/AnastasiaAdamoudi/GardenGenieBackend",
      websiteLink: "https://garden-genie.netlify.app/",
      status: "Complete",
    },
    // {
    //   name: "Bootcampers Treasure Chest",
    //   image: {
    //     src: bootcampersTreasureChest,
    //     alt: "Bootcampers Treasure Chest"
    //   },
    //   description: {
    //     summary: "During my time at the School of Code bootcamp, I had the opportunity to address a common challenge faced by bootcampers and, in collaboration with my team, we came up with an innovative solution.",
    //     challenge: "Bootcampers often found it challenging to access and categorize the plethora of learning and tech resources available to them.",
    //     solution: "An app that streamlines these resources, categorizing them for easy access. We chose React to ensure code maintainability and reusability, while delving into MaterialUI to enhance the user experience and learn the application of a new library. Importantly, we prioritized web accessibility standards to ensure inclusivity.",
    //     learnings: [
    //       "This project marked my first experience in team web development, teaching me essential skills in collaboration, project planning and Agile methodology.",
    //       "I contributed by creating React components and helping the team develop the app's functionality. I made sure we prioritised web accessibility, ensuring inclusivity in our app."
    //   ]
    //   },
    //   date: "April 2023",
    //   techStack: ["React.js", "MaterialUI", "CSS", "GitHub", "Figma"],
    //   repoLink: "https://github.com/AnastasiaAdamoudi/BootcampersTreasureChest",
    //   websiteLink: "https://anastasiaadamoudi.github.io/BootcampersTreasureChest/",
    //   status: "Complete",
    // },
  ];

  export const ongoingProjects = [
    {
      id: 1,
      name: "Compass Of Care",
      image: {
        src: compassOfCare,
        alt: "Compass of Care",
      },
      description: "Creating a web app to help a new care manager keep track of their clients, their employees and their documentation."
    },
    {
      id: 2,
      name: "Light A Beacon",
      image: {
        src: lightABeacon,
        alt: "Light a Beacon",
      },
      description: "Working on the frontend of an interractive map that will be connected to a Drupal backend, created for the Campfire Convention."
    }
  ];