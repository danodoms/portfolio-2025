import { ProjectCardProps } from "@/components/project-card";

export const projects: ProjectCardProps[] = [
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
      "Serves 1,000+ users",
      "Accelerated check-ins 10s -> 2s",
      "Digitized sanctions 5min -> 30s",
    ],
    liveLink: "https://eventoportal.netlify.app",
    repoLink: "https://github.com/danodoms/evento",
  },
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

export type CaseStudy = {
  title: string;

  about: string;
  aboutImage?: string;

  problem: string;
  problemImage?: string;

  challenge: string[];
  challengeImage?: string;

  solution: string;
  solutionImage?: string;

  results: string[];
  resultsImage?: string;

  conclusion: string[];
  conclusionImage?: string;
};

// export const eventoCaseStudy: CaseStudy = {
//   title:
//     "How Evento Streamlined Student Attendance and Reduced Check-In Time by 80%",
//   about:
//     "The organization is Davao ORiental State University - Banaybanay Campus Student Council. It is a student organization composed of 20 members, which handles events, down to planning and execution. The organiation serves more over 1000 students, and event time in and time out is record to encourage event participation.",
//   problem:
//     "Manual attendance tracking is too time consuming, it would take on average an hour for each student to check in and check out at an event. Some attendee that were not on the event were added on attendance by their peers/friends. Sanction calculation is tricky and relies on bringing physical paper for students adding more burden, and crossmatching student data by finding old records is chaotic, it is downright impractical.",
//   challenge: [
//     "There was little to no budget that would be allocated for buying infrastructure that would allow for such established solution",
//     "RFID and Biometric scanners were considered, but would require funding and time will be consumed for registering over 1000 users",
//     "Pure online only web based solutions would nearly be impossible to implement since the area has spotty connection and not every user have active mobile data subscription",
//     "Ease and friction of user onboarding would be considered heavily, so the solution must be something that the user can do quickly, so it can be deployed quickly as well",
//     "It should something that will be difficult to tamper, and hard to fake for attendees to prevent falsified attendance records as much as possible",
//   ],

//   solution:
//     "Upon weighing all possible options, there were two factors that would allow the easiest solution. First factor is that almost all students carry a smartphone, so something that can be scanned like a generated QR would be possible. The main solution was that each student would generate a printable QR code or perhaps displayed on their smartphones that they can carry or print. In which the QR Code would contain all needed student data for the student council organization can then each scan each attendee qr codes for their check in and check out on event. The system also automatically merges the data found on the student data, making the progressive web app evento only require internet for the few student council smartphone scanners to have internet, instead of requiring all attendees to have internet",
//   results: [
//     "Reduced average check-in time from several minutes per student to just a few seconds using QR code scanning.",
//     "Eliminated human error in attendance tracking, providing reliable and accurate attendance data for every event.",
//     "Enabled real-time reporting and dashboards, giving organizers instant insights on attendance and participation metrics.",
//     "Allowed student councils to manage multiple events in one centralized system, improving workflow efficiency.",
//     "Enhanced user experience for students by providing a quick, contactless, and seamless check-in process.",
//   ],
//   conclusion: [
//     "Evento transformed the way student attendance is handled, turning a slow, error-prone process into an efficient, reliable, and modern workflow.",
//     "The application not only saved hours of administrative work per event but also empowered student councils to make data-driven decisions.",
//     "By focusing on simplicity, speed, and accuracy, Evento improved both operational efficiency and overall user satisfaction for events.",
//   ],
// };

export const eventoCaseStudy: CaseStudy = {
  title:
    "How Evento Streamlined Student Attendance and Reduced Check-In Time by 80%",
  about:
    "The Davao Oriental State University - Banaybanay Campus Student Council is a student organization of 20 members responsible for planning and executing events. The council serves over 1,000 students, tracking event participation to encourage engagement and maintain accurate records of attendance.",
  aboutImage: "/images/case-study/evento-about-1.jpg",
  problem:
    "Manual attendance tracking was extremely time-consuming, with check-in and check-out taking up to an hour per student during events. Attendance records were prone to falsification, as peers could mark absent students as present. Calculating sanctions relied on physical attendance sheets, and cross-referencing with past records was chaotic and impractical.",
  problemImage: "/images/case-study/evento-problem-1.jpg",

  challenge: [
    "The council had little to no budget for purchasing specialized attendance infrastructure.",
    "RFID and biometric scanners were considered but would require significant funding and time to register over 1,000 students.",
    "A fully online web-based solution was not feasible due to spotty internet connectivity and the fact that not all students have active mobile data.",
    "The solution needed to be easy and quick for users, ensuring fast onboarding and rapid deployment.",
    "Attendance verification had to be secure, minimizing the risk of falsified records.",
  ],
  solution:
    "After evaluating possible options, the team identified two key factors that made a QR code-based solution ideal. Almost all students carry a smartphone, allowing each student to generate a QR code, either printable or displayed on their device. During events, the student council can scan each attendee’s QR code for check-in and check-out. The system automatically merges scanned data with student records, requiring internet only on the council's scanning devices rather than on all attendees' devices. This approach allowed for a fast, reliable, and offline-capable solution using a Progressive Web App (PWA) called Evento.",
  solutionImage: "/images/case-study/evento-solution-1.png",

  results: [
    "Check-in time was reduced from several minutes per student to just a few seconds.",
    "Human error in attendance tracking was eliminated, providing accurate and reliable records for all events.",
    "Real-time reporting and dashboards gave organizers instant insights into attendance and participation metrics.",
    "The centralized system allowed the student council to manage multiple events efficiently, improving overall workflow.",
    "Students benefited from a quick, contactless, and seamless check-in experience.",
  ],
  resultsImage: "/images/case-study/evento-result-1.jpg",

  conclusion: [
    "Evento transformed student attendance management from a slow, error-prone process into an efficient and reliable workflow.",
    "The system saved hours of administrative work per event and empowered the student council to make data-driven decisions.",
    "By focusing on simplicity, speed, and accuracy, Evento improved both operational efficiency and overall user satisfaction.",
  ],
};
