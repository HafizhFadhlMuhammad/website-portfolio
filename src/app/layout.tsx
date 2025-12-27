import "./globals.css";
import { Poppins } from "next/font/google";
import ParticlesBackground from "@/src/components/ParticlesBackground";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Hafizh Fadhl M | Porfolio",
  description: "Informatics Engineering Student & Backend Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
