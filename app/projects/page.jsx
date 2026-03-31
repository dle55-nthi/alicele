import React from 'react'
import Link from 'next/link'
import PinkContainer from "@/app/container"
import SmallBox from "@/app/skills/component";
import ReturnButton from "@/app/return-button";
import { MenuButton } from "@/app/smaller-button";

const projects = () => {
  const buttons = [
    {id: 1, link: "/personalstatement", picture: "/sticker button/rose.png", name: "about me!!"},
    {id: 2, link: "/skills", picture: "/sticker button/teddy.png", name: "skills"},
    {id: 3, link: "/studentorgs", picture: "/sticker button/balletshoes.png", name: "student orgs"},
    // {id: 4, link: "/projects", picture: "/sticker button/pearl.png", name: "projects"}
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
      <div className="flex gap-4 flex-wrap ">
        <SmallBox>
          <h1><b>Funding System Simulation</b></h1>
          <p>Planned and scoped a cloud-based solution using Microsoft Azure, defining technical roadmap, system architecture, and implementation phases. Developed Excel-based project tracking models and collaborated with QA to assess risks, optimize processes, and ensure alignment with measurable business goals.</p>
        </SmallBox>

        <SmallBox>
          <h1><b>Database System Design - Restaurant Stimulation</b></h1>
          <p>Designed and implemented a relational database to address a real-world business problem, including ER modeling, schema design, and normalization for data integrity. Built the system in SQL and developed complex queries to support efficient data retrieval and analysis.</p>
        </SmallBox>
      </div>
      </PinkContainer>
      <ReturnButton/>
    </main>
  )
}

export default projects