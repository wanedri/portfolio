'use client';

import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const technologies = [
  {
    name: "HTML 5",
    icon: "../portfolio/assets/skills/html.png",
  },
  {
    name: "CSS 3",
    icon: "../portfolio/assets/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "../portfolio/assets/skills/javascript.png",
  },
  // {
  //     name: "TypeScript",
  //     icon: "../portfolio/assets/skills/typescript.png",
  // },
  {
    name: "Bootstrap",
    icon: "../portfolio/assets/skills/bootstrap.png",
  },
  {
    name: "React JS",
    icon: "../portfolio/assets/skills/reactjs.png",
  },
  {
    name: "React Native",
    icon: "../portfolio/assets/skills/reactjs.png",
  },
  // {
  //     name: "Redux Toolkit",
  //     icon: "../portfolio/assets/skills/redux.png",
  // },
  {
    name: "Tailwind CSS",
    icon: "../portfolio/assets/skills/tailwind.png",
  },
  {
    name: "Laravel",
    icon: "../portfolio/assets/skills/laravel.png",
  },
  // {
  //     name: "Node JS",
  //     icon: "../portfolio/assets/skills/nodejs.png",
  // },
  // {
  //     name: "MongoDB",
  //     icon: "../portfolio/assets/skills/mongodb.png",
  // },
  // {
  //     name: "Three JS",
  //     icon: "../portfolio/assets/skills/threejs.svg",
  // },
  {
    name: "git",
    icon: "../portfolio/assets/skills/git.png"
  },
  // {
  //     name: "figma",
  //     icon: "../portfolio/assets/skills/figma.png",
  // },
  // {
  //     name: "docker",
  //     icon: "../portfolio/assets/skills/docker.png",
  // },
];


// Pahang FA
// Pahang FA App
// MFL
// Gocata
// DorusApp
// DorusWeb
// Aducktive
// Invest Pahang
// TM
// Mentiga
// KGT

const projects = [
  // {
  //   name: "Pahang FA",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: 'https://source.unsplash.com/featured/?car,rent',
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Pahang FA App",
    description:
      "Application that allows users to book ticket and view match schedule for Sri Pahang FC football team.",
    tags: [
      {
        name: "react native",
        color: "orange-text-gradient",
      },
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: '../portfolio/assets/projects/PahangFAApp.jpg',
  },
  {
    name: "MFL",
    description:
      "Mockup application that allows users to view match schedule and play game like fantasy football.",
    tags: [
      {
        name: "react native",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: '../portfolio/assets/projects/MFL.jpg',
  },
  {
    name: "Dorus App",
    description:
      "Application to ease the teacher and students to manage their class and learning process. It's a simplified version from the web version.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: '../portfolio/assets/projects/DorusApp.jpg',
  },
  {
    name: "Dorus Web",
    description:
      "Basically, a web-based platform attendance system for schools. It's allow the teacher and students to manage their class and learning process. ",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: '../portfolio/assets/projects/DorusWeb.png',
  },
  {
    name: "Aducktive",
    description:
      "An e-commerce platform that allows the user to manage their product and order. It's also have a feature to manage the customer and their order.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      }
    ],
    image: '../portfolio/assets/projects/Aducktive.png',
  },
  {
    name: "Invest Pahang",
    description:
      "Web application that allows to manage proposal and investment for Pahang state. It's also have a feature to manage the user and their proposal.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "violet-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      }
    ],
    image: '../portfolio/assets/projects/InvestPahang.png',
  },
  {
    name: "Invest Pahang Web",
    description:
      "An website for Invest Pahang. It's a corporate website for Invest Pahang to promote their services and investment opportunities.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "statamic",
        color: "green-text-gradient",
      }
    ],
    image: '../portfolio/assets/projects/InvestPahangWeb.png',
  },
  {
    name: "TM",
    description:
      "Work with TM for 6 months to develop an internal system. ",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      }
    ],
    image: '../portfolio/assets/projects/TM.jpg',
  },
  {
    name: "Mentiga",
    description:
      "Corporate website for Mentiga Corporation. It's a corporate website for Mentiga Corporation to promote their services and investment opportunities.",
    tags: [
      {
        name: "gatsby",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      }
    ],
    image: '../portfolio/assets/projects/Mentiga.png',
  },
  {
    name: "KGT",
    description:
      "Corporate website for KGT. It's a corporate website for KGT to promote their services and investment opportunities.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      }
    ],
    image: '../portfolio/assets/projects/KGT.png',
  },
];

const contacts = [
  {
    name: "Email",
    icon: <TfiEmail className='w-16 h-16' />,
    link: "mailto:wanadrinurhaqqki@gmail.com"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className='w-16 h-16' />,
    link: "https://www.linkedin.com/in/wan-adri-3454b1169/"
  },
  {
    name: "Github",
    icon: <FaGithub className='w-16 h-16' />,
    link: "https://github.com/wanedri"
  },
]

export { technologies, projects, contacts };
