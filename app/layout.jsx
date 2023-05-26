import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import "swiper/css";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Zahidul Haque | Portfolio",
  description: "This is zahidul haque portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={ubuntu.className}>
        <Header />
        <main className="bg-primary text-white">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
