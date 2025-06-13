import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'aos/dist/aos.css';
import AOSInit from './aos-init'; // You will create this next

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leonard Ai",
  description: "Trade your crypto currency, coins at sweet, fast and jolly rates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
        
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div className="">
          <AOSInit/>
        {children}

        </div>
       
      </body>
    </html>
  );
}
