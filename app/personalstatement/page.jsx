import React from 'react'
import Link from 'next/link'
import PinkContainer from "@/app/container"
import SmallBox from "@/app/skills/component";
import ReturnButton from "@/app/return-button";  

const statement = () => {
  return (
    <main className='font-serif min-h-screen flex flex-col items-center justify-center'>
      <div className="flex gap-2 items-end mb-[-20px] self-end mr-50 z-10 relative">
        <Link href="/skills" className="flex flex-col items-center">
          <img src="/sticker button/teddy.png" width={80} />
          <span className="text-sm">skills</span>
        </Link>
        <Link href="/studentorgs" className="flex flex-col items-center">
          <img src="/sticker button/balletshoes.png" width={80} />
          <span className="text-sm">orgs</span>
        </Link>
        <Link href="/projects" className="flex flex-col items-center">
          <img src="/sticker button/pearl.png" width={80} />
          <span className="text-sm">project</span>
        </Link>
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

            <div className="flex gap-2 flex-wrap mt-8">
            Please feel free to reach out to me. Looking forward to connect with you too! <br></br>
            Email: nguyenthii.ledacc@gmail.com
              <div className="text-columns center" style={{ columnCount: 2, columnGap: "20px" }}>
                <SmallBox><a href = "https://www.linkedin.com/in/ldnthi12/">My Linkedin</a><br></br></SmallBox>
                <SmallBox><a href = "https://github.com/">My GitHub</a></SmallBox>
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