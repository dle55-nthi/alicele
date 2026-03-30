import React from 'react'
import Link from 'next/link'
import PinkContainer from "@/app/container"
import SmallBox from "@/app/skills/component";

const contact = () => {
  return (
    <main className='font-serif'>
        {/* ============ Student Orgs button ============= */}
       <Link href="/studentorgs">
         <button>
           <img src="/sticker button/balletshoes.png" width={100}></img>
           student orgs
         </button>
       </Link>

       {/*============Projects button =============*/}
       <Link href="/projects">
         <button>
           <img src="/sticker button/pearl.png" width={100}></img>
           projects
         </button>
       </Link> 

       {/* ============ about me button ======================*/}
       <Link href="/personalstatement">
         <button>
           <img src="/sticker button/rose.png" width={100}></img>
           about me!!
         </button>
       </Link> 

       {/* ============ skills button ======================*/}
       <Link href="/skills">
         <button>
           <img src="/sticker button/teddy.png" width={100}></img>
           skills
         </button>
       </Link> 
  
  
       <Link href="/Home">
        <button>
          <img src="/sticker button/home.png" width={100}></img>
          return home
        </button>
       </Link>

      <PinkContainer>
        <div className="flex gap-2 flex-wrap mt-8">
          Please feel free to reach out to me with these communication channels. Looking forward to connect with you too! <br></br>
          Address: Chicago, IL 60607<br></br>
          My email: nguyenthii.ledacc@gmail.com<br></br>
          <div className="text-columns center" style={{ columnCount: 2, columnGap: "20px" }}>
            <SmallBox><a href = "https://www.linkedin.com/in/ldnthi12/">My Linkedin</a><br></br></SmallBox>
            <SmallBox><a href = "https://github.com/">My GitHub</a></SmallBox>
          </div>
        </div>
      </PinkContainer>
    </main>
  )
}

export default contact