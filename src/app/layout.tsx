import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter_Tight } from "next/font/google";
import "./globals.scss";
import { TodoProvider } from "../context/ToDoContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "400"],
});

export const metadata: Metadata = {
  title: "My to-do",
  description: "A To-do list made by Gabriel Muniz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interTight.className}`}
      >
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}
