import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@fortawesome/fontawesome-free/css/all.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atul_Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navbar section */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
