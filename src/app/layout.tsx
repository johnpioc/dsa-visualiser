import type { Metadata } from "next";

import "./globals.css";
export const metadata: Metadata = {
  title: "Data Structures & Algorithms Visualiser",
  description: "Explore the world of data structures and algorithms with interactive explanations and visualizations. Understand complex concepts through clear descriptions and dynamic visuals designed to make learning easy and engaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
