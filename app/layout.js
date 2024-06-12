import {Orbitron } from "next/font/google";
import "./globals.css";
import Navigation from "@/sections/Navigation";
import Footer from "@/sections/Footer";



const orbitron =Orbitron({subsets:["latin"]})

export const metadata = {
  title: "Skolars Entertainment",
  description: "Discover Skolars Entertainment - Where stars are made",
  keywords: 'Music, Artiste, Artiste Management, Manager, Record, Skolars Entertainment, Music Production, Music Management, Video Production, Studio, Quality music, Afrobeats,',
  category: 'Entertainment',
  metadataBase: new URL('https://www.skolarsentertainment.com'),
  openGraph: {
    type: "website",
    title: "Skolars Entertainment",
    description: "Discover Skolars Entertainment - Where stars are made",
    siteName: "Skolars Entertainment",
    images: [
      {
        url: 'https://www.skolarsentertainment.com/preview.png',
        width: 800,
        height: 600,
        alt: 'Skolars Entertainment Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@skolars_ent',
    title: 'Skolars Entertainment',
    description: 'Discover Skolars Entertainment - Where stars are made',
    images: [
      {
        url: 'https://www.skolarsentertainment.com/preview.png',
        alt: 'Skolars Entertainment Logo',
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
 
      <body className={`${orbitron.className} `}>
        <Navigation/>
        <div>{children}</div>
        <Footer/>
        </body>
    </html>
  );
}
