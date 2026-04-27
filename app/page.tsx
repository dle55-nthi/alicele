import React from 'react'
import Link from "next/link"
import PhotoDeck from "./photodeck";
import Statement from "@/app/personalstatement/page.jsx";
import Project from "@/app/projects/page.jsx";
import Skills from "@/app/skills/page.jsx";
import Studentorgs from "@/app/studentorgs/page.jsx";
import FloatingBubbles from "@/app/floatingbubble";
import SideMenu from './buttons';

export default function Home() {
  const photo = [
    { url: "/deck1.JPG", alt: "photo 1" },
    { url: "/deck2.jpg", alt: "photo 2" },
    { url: "/deck3.jpg", alt: "photo 3" },
    { url: "/deck4.JPG", alt: "photo 4" },
    { url: "/deck5.JPG", alt: "photo 5" },
    { url: "/deck6.jpg", alt: "photo 6" },
    { url: "/deck7.jpg", alt: "photo 7" },
    { url: "/deck8.jpg", alt: "photo 8" }
  ];
  return (
    <main className="font-serif text-black min-h-screen relative gap-4"> 
    <SideMenu/>
        <div id="top" className="text-center mt-10">
          <h1 className="text-6xl font-serif text-black/80 tracking-wide"> hi, i'm thi le </h1>
          <p className="text-black/40 font-serif mt-3 text-sm tracking-wider">welcome to my little webpage </p>
        </div>

        <div className="fixed-relative w-full z-0">
          <PhotoDeck photos={photo} />
        </div>
        
        <Statement/>
        <Project/>
        <Skills/>
        <Studentorgs/>
    
      <FloatingBubbles />
      
    </main>
  )
}