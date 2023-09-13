import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

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
import MantineUI from "/public/images/skills/mantine-ui.png";
import AntDesign from "/public/images/skills/ant-design.png";
// import GraphQL from "/public/images/skills/graphql.png";
import MUI from "/public/images/skills/mui.png";

// Projects Images
import Mixy from "/public/images/projects/mixy.png";
import AdminPanel from "/public/images/projects/admin.png";
import Agro from "/public/images/projects/agro.png";
import Gym from "/public/images/projects/gym.png";
import HacienTequila from "/public/images/projects/hacien.png";
import HektoFurniture from "/public/images/projects/hekto.png";

export const navigationLinks = [
  {
    id: 1,
    title: "Home",
    href: "#home",
  },
  {
    id: 2,
    title: "About",
    href: "#about",
  },
  {
    id: 3,
    title: "Works",
    href: "#works",
  },
  {
    id: 4,
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
    companyName: "Mabias",
    roll: "Front End Developer",
    location: "Dhaka, Bangladesh",
    jobType: "Intern",
    type: "Remote",
    start: "Jan 2023",
    end: "Mar 2023",
  },
  {
    id: 2,
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
    description: `Agro Grocery is an innovative online platform offering a wide range of groceries. With a userfriendly interface, it provides detailed product pages with descriptions, images, and pricing. Shop conveniently and
    make informed decisions at Agro Grocery.`,
    liveLink: "https://agro-grocery.netlify.app/",
    gitLink: "https://github.com/Jahid0178/agro-grocery-client",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    image: AdminPanel,
    technologies: ["React", "Syncfusion", "React Context API", "Tailwind"],
    description: `This Admin Dashboard built with React and Syncfusion technologies, the admin panel offers
    a powerful toolset for website operations. Users can manage lists, sort data, access useful tools like a calendar and
    kanban board, and visualize data with line and area charts.`,
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
    description: "Update Soon",
    liveLink: "https://mixy-ecommerce-jahid0178.vercel.app/",
    gitLink: "https://github.com/Jahid0178/mixy-ecommerce-client",
  },
  {
    id: 4,
    title: "GYM Website",
    image: Gym,
    technologies: ["React", "React Bootstrap", "Firebase Authentication"],
    description:
      "GYM is a React-based body fitness website with Node.js, MongoDB, React Bootstrap and Firebase authentication. Users create accounts to access the product store, offering gym equipment, apparel, and supplements. Personalized product recommendations enhance user engagement. The platform prioritizes seamless user interaction and a visually appealing interface.",
    liveLink: "https://gym-website-25129.web.app/home",
    gitLink: "https://github.com/Jahid0178/GYM",
  },
  {
    id: 5,
    title: "Hacien Tequila",
    image: HacienTequila,
    technologies: ["Next Js 13", "Tailwind CSS", "Typescript"],
    description: `Hacien Tequila project is a Next.js, Tailwind CSS, and TypeScript development that presents a
    collection of premium tequila drinks. Users can explore detailed product pages, discover comprehensive information,
    and stay engaged with company events. Experience the world of Hacien Tequila, indulge in exquisite drinks, and stay
    informed about upcoming events`,
    liveLink: "https://hacien-tequilla-client.vercel.app",
    gitLink: "https://github.com/Jahid0178/Hacien-Tequilla-Client",
  },
  {
    id: 6,
    title: "Hekto Furniture Shop",
    image: HektoFurniture,
    technologies: ["Next Js 13", "Tailwind CSS", "Typescript", "Next-auth"],
    description: `This is project is furniture buying full-stack website. This project is under development. 🙂`,
    liveLink: "https://hekto-furniture-shop.vercel.app/",
    gitLink: "https://github.com/Jahid0178/Hekto-Furniture-Shop",
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
  {
    id: 11,
    icon: MantineUI,
    title: "Mantine UI",
  },
  {
    id: 12,
    icon: AntDesign,
    title: "Ant Design",
  },
];

export const awards = [
  {
    id: 1,
    src: "https://i.ibb.co/NKHTJ0z/certificate.png",
    title: "Responsive Web Design",
    institute: "freeCodeCamp",
  },
  {
    id: 2,
    src: "https://i.ibb.co/mRVV39y/p-hero-certificate.jpg",
    title: "Complete Web Development Certificate",
    institute: "Programming Hero",
  },
  {
    id: 3,
    src: "https://i.ibb.co/YdYpcGD/Employment-certificate-zahidul-haque.jpg",
    title: "Employement Certificate",
    institute: "Rightbiz",
  },
];
