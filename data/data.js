import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

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
    title: "Work",
    href: "/work",
  },
  {
    id: 4,
    title: "Blog",
    href: "/blog",
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
