import { ProjectCardProps } from "@/components/project-card";

export const projects: ProjectCardProps[] = [
  {
    title: "Dekada",
    description: "Digital research repository",
    images: [
      "/images/dekada/dekada-1.webp",
      "/images/dekada/dekada-2.webp",
      "/images/dekada/dekada-3.webp",
      "/images/dekada/dekada-4.webp",
    ],
    impacts: [
      "Stores 200+ undergraduate research",
      "Improved knowledge sharing",
    ],
    liveLink: "https://dekada.onrender.com/",
  },
  {
    title: "evento",
    description: "QR Code based events attendance and sanctioning web-app",
    images: [
      "/images/evento/evento-1.webp",
      "/images/evento/evento-2.webp",
      "/images/evento/evento-3.webp",
      "/images/evento/evento-4.webp",
      "/images/evento/evento-5.webp",
      "/images/evento/evento-6.webp",
    ],
    impacts: [
      "Successfully serves 1,000+ users",
      "Attendance logging sped up by 5x",
    ],
    liveLink: "https://eventoportal.netlify.app",
    repoLink: "https://github.com/danodoms/evento",
  },
  {
    title: "XR Vision",
    description: "AI-Powered Rice Leaf Nutrient Deficiency Detector Mobile App",
    images: [
      "/images/xr-vision/xr-vision-1.webp",
      "/images/xr-vision/xr-vision-2.webp",
      "/images/xr-vision/xr-vision-3.webp",
    ],
    impacts: ["On-device AI processing", "Realtime image analysis"],
    // liveLink: "https://github.com/danodoms/XR-Vision",
    repoLink: "https://github.com/danodoms/xr-vision",
  },
  {
    title: "Biometric Attendance",
    description: "Fingerprint based attendance system with DTR generation",
    images: [
      "/images/bio-attendance/bio-attendance-0.webp",
      "/images/bio-attendance/bio-attendance-1.webp",
      "/images/bio-attendance/bio-attendance-2.webp",
      "/images/bio-attendance/bio-attendance-3.webp",
      "/images/bio-attendance/bio-attendance-4.webp",
      "/images/bio-attendance/bio-attendance-5.webp",
      "/images/bio-attendance/bio-attendance-6.webp",
      "/images/bio-attendance/bio-attendance-7.webp",
      "/images/bio-attendance/bio-attendance-8.webp",
      "/images/bio-attendance/bio-attendance-9.webp",
      "/images/bio-attendance/bio-attendance-10.webp",
      "/images/bio-attendance/bio-attendance-11.webp",
      "/images/bio-attendance/bio-attendance-12.webp",
      "/images/bio-attendance/bio-attendance-13.webp",
      "/images/bio-attendance/bio-attendance-14.webp",
    ],
    impacts: [
      "Secure, tamper-proof identity tracking",
      "Automated DTR generation",
    ],
    // liveLink: "https://github.com/danodoms/fingerprint-attendance",
    repoLink: "https://github.com/danodoms/fingerprint-attendance",
  },
];

export const catMessages = [
  // 😼 Sassy & Judgy
  "Meow. You again?",
  "Mrow. That’s not my problem.",
  "Mewp. I *saw* what you did.",
  "Mrrrow! My standards are higher than this.",
  "Mee-yow! You call that effort?",
  "Hiss! Fix your mistakes.",
  "Prrt. You may proceed... for now.",
  "Mew. Try harder, hooman.",

  // 🥺 Cute & Needy
  "Mew~ Feed me, please.",
  "Prrrrr... I like you.",
  "Mrow~ Hold me.",
  "Mewww... pet me, now.",
  "Meeeeeow! I'm so smol and hungry.",
  "Miiiiaao~ I require attention.",
  "Mewp! That scared me!",

  // 😈 Chaotic & Wild
  "HISSS! Just kidding 😸",
  "Yowl! I'm feral and fabulous.",
  "Mrrrreeeow! The zoomies have begun!",
  "Mrawr! I knocked over your stuff.",
  "Mowww! There is no escape.",
  "Meow. I pressed a button. Chaos.",
  "Chirp! The hunt begins!",

  // 👑 Royal & Dramatic
  "M'row! I am your ruler.",
  "Meow. Bring me offerings.",
  "Prrrrt! Bow before me.",
  "Mee-yow~ I accept your presence.",
  "Mao. I will allow it.",
  "Meow. You may gaze upon me.",
];
