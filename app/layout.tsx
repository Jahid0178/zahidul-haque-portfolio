import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AptabaseProvider } from "@aptabase/react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zahidul Haque | Personal Portfolio",
  description: "Zahidul Haque Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AptabaseProvider
          appKey={process.env.NEXT_PUBLIC_APTABASE_APP_KEY as string}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AptabaseProvider>
        <Toaster />
      </body>
    </html>
  );
}
