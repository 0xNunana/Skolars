import {Orbitron } from "next/font/google";
import "./globals.css";
import Navigation from "@/sections/Navigation";
import Footer from "@/sections/Footer";



const orbitron =Orbitron({subsets:["latin"]})

export const metadata = {
  title: "Skolars Entertainment",
  description: "Discover Skolars Entertainment - Your one-stop destination for music, artiste management, and record production.",
  keywords: 'Music, Artiste, Artiste Management, Manager, Record, Skolars Entertainment, Music Production, Music Management, Video Production, Studio, Quality music, Afrobeats,',
  category: 'Entertainment',
  metadataBase: new URL('https://skolars.vercel.app'),
  openGraph: {
    type: "website",
    title: "Skolars Entertainment",
    description: "Discover Skolars Entertainment - Your one-stop destination for music, artiste management, and record production.",
    siteName: "Skolars Entertainment",
    images: [
      {
        url: 'https://skolars.vercel.app/logo.png',
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
    description: 'Discover Skolars Entertainment - Your one-stop destination for music, artiste management, and record production.',
    images: [
      {
        url: 'https://skolars.vercel.app/logo.png',
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
