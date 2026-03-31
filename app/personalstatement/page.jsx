import React from 'react'
import Link from 'next/link'
import PinkContainer from "@/app/container"
import SmallBox from "@/app/skills/component";
import ReturnButton from "@/app/return-button";  
import { MenuButton } from "@/app/smaller-button";

const statement = () => {
  const buttons = [
    // {id: 1, link: "/personalstatement", picture: "/sticker button/rose.png", name: "about me!!"},
    {id: 2, link: "/skills", picture: "/sticker button/teddy.png", name: "skills"},
    {id: 3, link: "/studentorgs", picture: "/sticker button/balletshoes.png", name: "student orgs"},
    {id: 4, link: "/projects", picture: "/sticker button/pearl.png", name: "projects"}
  ]

  return (
    <main className='font-serif min-h-screen flex flex-col items-center justify-center'>
      <div className="flex gap-2 items-end mb-[-20px] self-end mr-50 z-10 relative">
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
        <div className="text-columns" style={{ columnCount: 2, columnGap: "20px" }}>
          <div className="column">
          <p>Hi, my name is <b>Dac Nguyen Thi Le</b>, but you can call me Thi. 
          I am currently a junior at the University of Illinois Chicago (UIC), 
          majoring in <b>Data Science</b> with a concentration in Business Analytics.
          Currently seeking a Chicago-based summer role where I can blend tech, analytics, and a little bit of curiosity ✨</p>
          <br></br>
          
          <i syle={{fontSize:"8px"}}>Fun fact: I like braiding.</i>

            <div className="flex gap-2 flex-wrap mt-4">
            Please feel free to reach out to me. Looking forward to connect with you too!
              <div className="text-columns text-center font-bold justify-center align-center items-center" >
                <SmallBox>nguyenthii.ledacc@gmail.com</SmallBox>
                <div className="flex gap-2 flex-wrap mt-2" style={{ columnCount: 2, columnGap: "20px" }}>
                  <SmallBox><a href = "https://www.linkedin.com/in/ldnthi12/">My Linkedin</a></SmallBox>
                  <SmallBox><a href = "https://github.com/">My GitHub</a></SmallBox>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <img src="/aboutme.JPG" width={380}/>
          </div>
        </div>
      </PinkContainer>
    
      <ReturnButton/>
    </main>
  )
}

export default statement