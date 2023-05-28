import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import "swiper/css";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Zahidul Haque | Portfolio",
  description:
    "Welcome to my portfolio! I'm a skilled MERN Stack developer with a strong focus on front-end development. Explore my projects, showcasing my expertise in crafting responsive and user-friendly web applications. With a passion for creating seamless user experiences, I aim to bring innovative ideas to life using the latest technologies. Discover my skills in HTML, CSS, JavaScript, React, and more, and let's collaborate on your next digital endeavor.",
  keywords:
    "MERN Stack Developer, Front-End Developer, Web Application Development, Responsive Web Design, HTML5, CSS3, JavaScript, React.js, Portfolio Showcase, Innovative Web Solutions, Mobile-Friendly Development, Cross-Browser Compatibility, Performance Optimization, JavaScript Frameworks, Code Efficiency, Node Js, MongoDB, Next.Js Developer, Next.Js, Express.Js, React.js Developer, React Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={ubuntu.className}>
        <Header />
        <main className="bg-primary text-white">
          <Toaster />
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
