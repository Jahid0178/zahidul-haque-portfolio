import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import MabiasLogo from "/public/images/company/mabias.jpg";
import RightbizLogo from "/public/images/company/rightbiz.jpg";

export const navigationLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Career",
    href: "/career",
  },
  {
    id: 4,
    title: "Work",
    href: "/work",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
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
