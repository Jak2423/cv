import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import ConsultlyLogo from "../images/logos/consultly.svg";
import ParabolLogo from "../images/logos/parabol.svg";

export const RESUME_DATA = {
  name: "Javkhlan E.",
  initials: "J",
  location: "Ulaanbaatar, Mongolia",
  locationLink: "https://www.google.com/maps/place/Ulaanbaatar",
  about: "A self-taught developer with an interest in Computer Science.",
  summary:
    "I am currently student at National University of Mongolia. I describe myself as a passionate developer who loves coding, open source, and the web platform.",
  avatarUrl: "https://avatars.githubusercontent.com/u/95999268?v=4",
  personalWebsiteUrl: "https://javkhlan.vercel.app/",
  contact: {
    email: "javhlan0420@gmail.com",
    tel: "+97688242310",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Jak2423",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/javkhlan-enkhbayar-7896851b2/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/javhln",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National University of Mongolia",
      degree: "Bachelor's Degree in Software engineering",
      start: "2020",
      end: "now",
    },
  ],
  work: [
    {
      company: "Zochil",
      link: "https://zochil.mn/",
      badges: [],
      title: "Internship",
      logo: ParabolLogo,
      start: "2023",
      end: "now",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Flutter",
    "Tailwind CSS",
    "Java",
    "Swing",
  ],
  projects: [
    {
      title: "Botgo",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Vercel",
      ],
      description:
        "Start your journey by exploring courses you could study, be inspired to find the perfect course for you.",
      logo: ConsultlyLogo,
      link: {
        label: "botgo.vercel.app",
        href: "https://botgo.vercel.app/",
      },
    },
  ],
} as const;
