import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CineBot",
  description: "CineBot nextjs movie recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1B1B1B]`}>
        <main>
          <Toaster />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
