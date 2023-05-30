import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import MabiasLogo from "/public/images/company/mabias.jpg";
import RightbizLogo from "/public/images/company/rightbiz.jpg";

// Skills Images
import HTML from "/public/images/skills/html.png";
import CSS from "/public/images/skills/css.png";
import JavaScript from "/public/images/skills/js.png";
import React from "/public/images/skills/react.png";
import NodeJs from "/public/images/skills/node.png";
import Express from "/public/images/skills/express.png";
import MongoDb from "/public/images/skills/mongodb.png";
import Redux from "/public/images/skills/redux.png";
import Tailwind from "/public/images/skills/tailwind.webp";
// import GraphQL from "/public/images/skills/graphql.png";
import MUI from "/public/images/skills/mui.png";

// Projects Images
import Mixy from "/public/images/projects/mixy.png";
import AdminPanel from "/public/images/projects/admin.png";
import Agro from "/public/images/projects/agro.png";
import Gym from "/public/images/projects/gym.png";

export const navigationLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "#about",
  },
  {
    id: 3,
    title: "Work",
    href: "#work",
  },
  {
    id: 4,
    title: "Blogs",
    href: "#blogs",
  },
  {
    id: 5,
    title: "Contact",
    href: "#contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com/jahidul.haque.01789/",
    icon: <BsFacebook size={20} />,
  },
  {
    id: 2,
    title: "Github",
    link: "https://github.com/Jahid0178/",
    icon: <BsGithub size={20} />,
  },
  {
    id: 3,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/zahid767/",
    icon: <BsLinkedin size={20} />,
  },
  {
    id: 4,
    title: "Gmail",
    type: "mail",
    link: "zahidul.haque767@gmail.com",
    icon: <IoMdMail size={20} />,
  },
];

export const comapnyNames = [
  {
    id: 1,
    logo: MabiasLogo,
    companyName: "Mabias",
    roll: "Front End Developer",
    location: "Dhaka, Bangladesh",
    jobType: "Intern",
    type: "Remote",
    start: "Sep 2022",
    end: "Mar 2023",
  },
  {
    id: 2,
    logo: RightbizLogo,
    companyName: "Rightbiz",
    roll: "Front End Developer",
    location: "London, UK",
    jobType: "Full-Time",
    type: "Remote",
    start: "Feb 2022",
    end: "May 2023",
  },
];

export const projects = [
  {
    id: 1,
    title: "Agro Grocery",
    image: Agro,
    technologies: [
      "React",
      "React Redux",
      "Swiper Js",
      "Formik",
      "Yup Validation",
    ],
    liveLink: "https://agro-grocery.netlify.app/",
    gitLink: "https://github.com/Jahid0178/agro-grocery-client",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    image: AdminPanel,
    technologies: ["React", "Syncfusion", "React Context API", "Tailwind"],
    liveLink: "https://glittering-crisp-db6420.netlify.app/",
    gitLink: "https://github.com/Jahid0178/Admin-Dashboard-React",
  },
  {
    id: 3,
    title: "Mixy Ecommerce",
    image: Mixy,
    technologies: [
      "Next Js",
      "Redux",
      "Ant Design",
      "Firebase Authentication",
      "Node",
      "Experss",
      "MongoDB",
    ],
    liveLink: "https://mixy-ecommerce-jahid0178.vercel.app/",
    gitLink: "https://github.com/Jahid0178/mixy-ecommerce-client",
  },
  {
    id: 4,
    title: "GYM Website",
    image: Gym,
    technologies: ["React", "React Bootstrap", "Firebase Authentication"],
    liveLink: "https://gym-website-25129.web.app/home",
    gitLink: "https://github.com/Jahid0178/GYM",
  },
];

export const skills = [
  {
    id: 1,
    icon: HTML,
    title: "HTML",
  },
  {
    id: 2,
    icon: CSS,
    title: "CSS",
  },
  {
    id: 3,
    icon: JavaScript,
    title: "JavaScript",
  },
  {
    id: 4,
    icon: React,
    title: "React",
  },
  {
    id: 5,
    icon: NodeJs,
    title: "Node Js",
  },
  {
    id: 6,
    icon: Express,
    title: "Express Js",
  },
  {
    id: 7,
    icon: MongoDb,
    title: "MongoDB",
  },
  {
    id: 8,
    icon: MUI,
    title: "MUI",
  },
  {
    id: 9,
    icon: Redux,
    title: "Redux",
  },
  {
    id: 10,
    icon: Tailwind,
    title: "Tailwind",
  },
];
