import IconAntDesign from "@/components/svg/IconAntDesign";
import IconCss3 from "@/components/svg/IconCss";
import IconExpress from "@/components/svg/IconExpress";
import IconGraphql from "@/components/svg/IconGraphql";
import IconHtml5 from "@/components/svg/IconHtml5";
import IconJavascript from "@/components/svg/IconJavascript";
import IconMantine from "@/components/svg/IconMantine";
import IconMongodb from "@/components/svg/IconMongodb";
import IconMui from "@/components/svg/IconMui";
import IconNode from "@/components/svg/IconNode";
import IconReact from "@/components/svg/IconReact";
import IconRedux from "@/components/svg/IconRedux";
import IconTailwind from "@/components/svg/IconTailwind";
import { socialLinkType } from "@/types/types";

export const navigations: {
  id: number;
  name: string;
  href: string;
}[] = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About Me",
    href: "#about",
  },
  {
    id: 3,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 4,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 5,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 6,
    name: "Contact Me",
    href: "#contact",
  },
];

export const skills: {
  id: number;
  title: string;
  icon: any;
}[] = [
  {
    id: 1,
    title: "HTML",
    icon: IconHtml5,
  },
  {
    id: 2,
    title: "CSS",
    icon: IconCss3,
  },
  {
    id: 3,
    title: "Javascript",
    icon: IconJavascript,
  },
  {
    id: 4,
    title: "ReactJS",
    icon: IconReact,
  },
  {
    id: 5,
    title: "NodeJS",
    icon: IconNode,
  },
  {
    id: 6,
    title: "ExpressJS",
    icon: IconExpress,
  },
  {
    id: 7,
    title: "MongoDB",
    icon: IconMongodb,
  },
  {
    id: 8,
    title: "MUI",
    icon: IconMui,
  },
  {
    id: 9,
    title: "Redux",
    icon: IconRedux,
  },
  {
    id: 10,
    title: "Tailwind",
    icon: IconTailwind,
  },
  {
    id: 11,
    title: "Mantine UI",
    icon: IconMantine,
  },
  {
    id: 12,
    title: "Ant Design",
    icon: IconAntDesign,
  },
  {
    id: 13,
    title: "GraphQL",
    icon: IconGraphql,
  },
];

export const experiences: {
  id: number;
  companyName: string;
  roll: string;
  location: string;
  duration: {
    start: string;
    end: string;
  };
  jobType: string;
}[] = [
  {
    id: 1,
    companyName: "Rightbiz",
    roll: "Front End Developer",
    location: "London, UK",
    duration: {
      start: "Feb 2022",
      end: "May 2023",
    },
    jobType: "Full Time (Remote)",
  },
  {
    id: 2,
    companyName: "Mabias",
    roll: "Front End Developer",
    location: "Dhaka, Bangladesh",
    duration: {
      start: "Jan 2023",
      end: "Mar 2023",
    },
    jobType: "Intern (Remote)",
  },
  {
    id: 3,
    companyName: "DevFirm",
    roll: "Front End Developer",
    location: "Dhaka, Bangladesh",
    duration: {
      start: "Jan 2024",
      end: "Jan 2024",
    },
    jobType: "Full Time (Hybrid)",
  },
  {
    id: 4,
    companyName: "C-Sunshine",
    roll: "Full Stack Developer",
    location: "Bratislava, Slovakia",
    duration: {
      start: "Feb 2024",
      end: "Present",
    },
    jobType: "Full Time (Remote)",
  },
];

export const projects = [
  {
    id: 1,
    name: "Agro Grocery",
    description:
      "Agro Grocery is an innovative online platform offering a wide range of groceries. With a user friendly interface, it provides detailed product pages with descriptions, images, and pricing. Shop conveniently and make informed decisions at Agro Grocery.",
    imageUrl: "https://i.ibb.co/LxkRcqv/project1.webp",
    links: {
      live: "https://agro-grocery.netlify.app",
      git: "https://github.com/Jahid0178/agro-grocery-client",
    },
    techStacks: ["ReactJS", "Redux", "SwiperJS", "Formik", "Yup Validation"],
  },
  {
    id: 2,
    name: "Admin Dashboard",
    description:
      "This Admin Dashboard built with React and Syncfusion technologies, the admin panel offers a powerful toolset for website operations. Users can manage lists, sort data, access useful tools like a calendar and kanban board, and visualize data with line and area charts.",
    imageUrl: "https://i.ibb.co/4VchvMM/project2.webp",
    links: {
      live: "https://glittering-crisp-db6420.netlify.app",
      git: "https://github.com/Jahid0178/Admin-Dashboard-React",
    },
    techStacks: ["React", "Syncfusion", "React Context API", "TailwindCSS"],
  },
  {
    id: 3,
    name: "Mixy Ecommerce",
    description: "Update soon",
    imageUrl: "https://i.ibb.co/jhNz4QX/project3.webp",
    links: {
      live: "https://mixy-ecommerce-jahid0178.vercel.app",
      git: "https://github.com/Jahid0178/mixy-ecommerce-client",
    },
    techStacks: [
      "NextJS",
      "Redux",
      "Ant Design",
      "Firebase Auth",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
  },
  {
    id: 4,
    name: "GYM Website",
    description:
      "GYM is a React-based body fitness website with Node.js, MongoDB, React Bootstrap and Firebase authentication. Users create accounts to access the product store, offering gym equipment, apparel, and supplements. Personalized product recommendations enhance user engagement. The platform prioritizes seamless user interaction and a visually appealing interface.",
    imageUrl: "https://i.ibb.co/9ykvsWT/project4.webp",
    links: {
      live: "https://gym-website-25129.web.app/home",
      git: "https://github.com/Jahid0178/GYM",
    },
    techStacks: ["React", "React Bootstrap", "Firebase Auth"],
  },
  {
    id: 5,
    name: "Hacien Tequila",
    description:
      "Hacien Tequila project is a Next.js, Tailwind CSS, and TypeScript development that presents a collection of premium tequila drinks. Users can explore detailed product pages, discover comprehensive information, and stay engaged with company events. Experience the world of Hacien Tequila, indulge in exquisite drinks, and stay informed about upcoming events",
    imageUrl: "https://i.ibb.co/LQkRtXt/project5.webp",
    links: {
      live: "https://hacien-tequilla-client.vercel.app",
      git: "https://github.com/Jahid0178/Hacien-Tequilla-Client",
    },
    techStacks: ["NextJS 13", "TailwindCSS", "Typescript"],
  },
  {
    id: 6,
    name: "Hekto Furniture Shop",
    description:
      "This is project is furniture buying full-stack website. This project is under development. 🙂",
    imageUrl: "https://i.ibb.co/THLCb9Z/project6.webp",
    links: {
      live: "https://hekto-furniture-shop.vercel.app",
      git: "https://github.com/Jahid0178/Hekto-Furniture-Shop",
    },
    techStacks: ["NextJS 13", "TailwindCSS", "Typescript", "Next Auth"],
  },
  {
    id: 7,
    name: "React Image Gallery",
    description:
      "The React Image Gallery is an easy way to organize your pictures. You can move them around by dragging and dropping, select multiple images at once, and delete the ones you don't want. It works on different devices, making it simple to manage your image collection.",
    imageUrl: "https://i.ibb.co/nmN1SGR/project7.webp",
    links: {
      live: "https://react-gallery-image.netlify.app",
      git: "https://github.com/Jahid0178/react-gallery-image",
    },
    techStacks: ["ReactJS", "TailwindCSS", "DND Kit"],
  },
];

export const socialLinks: socialLinkType[] = [
  {
    id: "1",
    icon: "github",
    href: "https://github.com/Jahid0178",
  },
  {
    id: "2",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/zahid767",
  },
  {
    id: "3",
    icon: "facebook",
    href: "https://www.facebook.com/jahidul.haque.01789/",
  },
];
