import React from 'react'
import Link from "next/link"
import { MainPageButton } from "@/app/buttons"

export default function Home() {
  const buttons = [
    {id: 1, link: "/personalstatement", picture: "/sticker button/rose.png", name: "about me!!"},
    {id: 2, link: "/skills", picture: "/sticker button/teddy.png", name: "skills"},
    {id: 3, link: "/studentorgs", picture: "/sticker button/balletshoes.png", name: "student orgs"},
    {id: 4, link: "/projects", picture: "/sticker button/pearl.png", name: "projects"}
  ]
  return (
    <main className="font-serif text-black min-h-screen relative"> 
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-16 items-end">
        {buttons.map((buttons) => (
          <MainPageButton
          key = {buttons.id}
          link = {buttons.link}
          picture= {buttons.picture}
          name = {buttons.name}
          />
        ))}
      </div> 

      <div className="absolute flex flex-col" style={{top: '40%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <img
          src="/profile.JPG"
          alt="Dac Nguyen Thi Le"
          className="rounded-full object-cover object-top"
          style={{width: 370, height: 370}}
        />
        <h1 className='absolute flex flex-col' style={{bottom:'0%', right:'0%', fontSize:'45px'}}>Thi Le</h1>
        <img src="/sticker button/home.png" className='absolute flex flex-col' style={{bottom:'0%', left:'0%'}} width={100}></img>
        <img src="/sticker button/pie.png" className='absolute flex flex-col' style={{top:'0%', left:'0%'}} width={100}></img>
        <img src="/sticker button/phone.png" className='absolute flex flex-col' style={{top:'50%', right:'-10%'}} width={100}></img>
      </div>
    </main>
  )
}