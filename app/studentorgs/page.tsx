import React from 'react'
import Link from 'next/link'
import PinkContainer from "@/app/container";
import ReturnButton from "@/app/return-button";  
import SmallBox from "@/app/skills/component";
import { MenuButton } from "@/app/smaller-button";

const studentorgs = () => {
  const buttons = [
    {id: 1, link: "/personalstatement", picture: "/sticker button/rose.png", name: "about me!!"},
    {id: 2, link: "/skills", picture: "/sticker button/teddy.png", name: "skills"},
    // {id: 3, link: "/studentorgs", picture: "/sticker button/balletshoes.png", name: "student orgs"},
    {id: 4, link: "/projects", picture: "/sticker button/pearl.png", name: "projects"}
  ]

  return (
    <main className='font-serif min-h-screen flex flex-col items-center justify-center'>
      <div className="flex gap-2 items-end mb-[-20px] self-end mr-60 z-10 relative">
        {buttons.map((buttons) => (
          <MenuButton
          key = {buttons.id}
          link = {buttons.link}
          picture = {buttons.picture}
          name = {buttons.name}
          />
        ))}
      </div>

      <PinkContainer>
      I am passionate about volunteering and taking initiative in collaborative environments, where I can contribute to meaningful projects while supporting others. 
      I value opportunities to lead, organize, and participate in activities that bring people together, strengthen communities, and create positive impact. 
      Through these experiences, I continue to develop my communication, teamwork, and leadership skills while staying committed to helping others succeed.<br></br>
      <div className='flex flex-row gap-4 text-center justify-center'>
        <SmallBox><b>WiCS</b> <br/>(Active member)</SmallBox>
        <SmallBox><b>UIC Excel Club</b> <br/> (Active member)</SmallBox>
        <SmallBox><b>IDSSO</b> <br/> (Active member)</SmallBox>
      </div>

      </PinkContainer>

      <ReturnButton/>
    </main>
  )
}

export default studentorgs