import type { Metadata } from "next";
import "./globals.css";
import TopNav from "./ui/TopNav";
import SideNav from "./ui/SideNav";

export const metadata: Metadata = {
  title: "Project Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
