
import Foode from '@/public/Foode.png'
import medjestic from '@/public/medjestic.png'
import thewalls from '@/public/thewalls.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Recommendations",
    hash: "#recommendations",
  },
] as const;



export const projectsData = [
  {
    title: "Thewalls",
    description:
      "The Walls app revolutionizes music discovery by dynamically generating personalized album walls using Spotify API data. With intuitive features like customizable backgrounds and easy social sharing.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "SpotifyAPI"],
    imageUrl: thewalls,
    status:'🛠️ Maintained',
    githublink: 'https://github.com/Poojan-20/thewalls',
    previewlink:'https://thewalls.vercel.app/',
  },
  {
    title: "Medjestic",
    description:
      "Medjectisc offers a secure telemedicine platform for doctors and patients, featuring AES-encrypted medical records and WebRTC video consultations with AES encryption and a built-in pharmacy.",
    tags: ["React", "WebRTC", "Socket.io","firebase",'Node'],
    imageUrl: medjestic,
    status:'🏗️ Not maintained',
    githublink: 'https://github.com/Poojan-20/ehealthcare-frontend',
    previewlink:'https://medjestic.netlify.app/',
  },
  {
    title: "FoodE",
    description:
      "Foode redefines online grocery shopping with personalized recommendations, an intuitive cart system for effortless organization, and precise, transparent invoices for seamless transactions.",
    tags: ["React", "MongoDB", "Node", "Express", "python"],
    imageUrl: Foode,
    status:'🏗️ Not maintained',
    githublink: '',
    previewlink:'',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Django",
] as const;