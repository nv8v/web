const ascii = `Yokusu , Watashi no Portfolio 👋🏼`;

export const resume = {
  name: "Saad",
  ascii,

  location: "Casablanca, Morocco",
  locationLink: "https://www.google.com/maps/place/Casablanca",

  about:
    "I’m a <strong>Computer Science student</strong> and daily <a href='https://archlinux.org/' target='_blank' class='underline break-all' style='color: #a2c9eb'>Arch</a> user, interested in <strong>software</strong>, <strong>systems</strong>, and understanding how things work under the hood.",

  languagesSummary:
  "Currently learning <strong>TypeScript</strong> and <strong>JavaScript</strong>, with a focus on building solid programming fundamentals.",
 
  runtimesSummary:
  "Messing around with <strong>Node.js</strong> and <strong>Deno</strong> when I feel like building something.",
  
skills: [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Deno",
  "Git",
  "Linux",
  "Arch Linux",
  "Hyprland"
  ],

  contact: {
  email: "saadxe8@gmail.com",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/nv8v",
    },
    Telegram: {
      name: "Telegram",
      url: "https://t.me/SetByte",
      },
    },
  },

  resumeLink: "./documents/resume.pdf",

  futurePlans:
  "Exploring <strong>Linux</strong>, operating systems, and systems programming while slowly going deeper down the rabbit hole and improving my programming knowledge.",

  projects: [
  {
    title: "Projects",
    active: false,
    description: "Nothing worth showing here yet. I’m still building.",
    links: [],
  },
],
} as const;

declare global {
  namespace Lume {
    interface Data {
      resume: typeof resume;
    }
  }
}
