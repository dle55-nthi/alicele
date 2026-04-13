import React from "react";
import Link from 'next/link';
import PinkContainer from "@/app/container";
import SmallBox from "@/app/skills/component";
import ReturnButton from "@/app/return-button";  
import { MenuButton } from "@/app/smaller-button";

export default function skills() {
  const buttons = [
    {id: 1, link: "/personalstatement", picture: "/sticker button/rose.png", name: "about me!!"},
    // {id: 2, link: "/skills", picture: "/sticker button/teddy.png", name: "skills"},
    {id: 3, link: "/studentorgs", picture: "/sticker button/balletshoes.png", name: "student orgs"},
    {id: 4, link: "/projects", picture: "/sticker button/pearl.png", name: "projects"}
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-serif">
      <div className="flex gap-2 items-end mb-[-20px] z-10 relative w-full justify-center md:justify-end md:pr-80">
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
        <div className="flex gap-4 flex-wrap text-center">
          <SmallBox>
            <div className="w-[100px] h-[100px] flex items-center justify-center" style={{alignItems:"center"}}>
              <img src="/sticker button/c++.png" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <h1>Front-end Code</h1><br></br>
            <p>3/5</p>
          </SmallBox>

          <SmallBox>
            <div className="w-[100px] h-[100px] flex items-center justify-center" >
              <img src="/sticker button/sql.png" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <h1 >SQL</h1><br></br>
            <p>4/5</p>
          </SmallBox>

          <SmallBox>
            <div className="w-[100px] h-[100px] flex items-center justify-center">
              <img src="/sticker button/powerbi.jpg" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <h1>PowerBI</h1><br></br>
            <p>4/5</p>
          </SmallBox>

          <SmallBox>
            <div className="w-[100px] h-[100px] flex items-center justify-center">
              <img src="/sticker button/R_logo.png" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <h1>R/SAS</h1><br></br>
            <p>4/5</p>
          </SmallBox>
        </div>
      </PinkContainer>

      <ReturnButton/> 

    </div>
  );
}