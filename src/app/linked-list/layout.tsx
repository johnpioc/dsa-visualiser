import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

import "../globals.css";

export const metadata: Metadata = {
  title: "Linked List",
  description: "Explore the world of data structures and algorithms with interactive explanations and visualizations. Understand complex concepts through clear descriptions and dynamic visuals designed to make learning easy and engaging.",
};

const poppins = Poppins({
    weight: ["400","700"],
    subsets: ["latin"],
    variable: "--primary-font"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} bg-background`}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
