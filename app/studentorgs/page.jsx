import React from 'react'
import Link from 'next/link'
import PinkContainer from "@/app/container";
import ReturnButton from "@/app/return-button";  

const studentorgs = () => {
  return (
    <main className='font-serif min-h-screen flex flex-col items-center justify-center'>
      <div className="flex gap-2 items-end mb-[-20px] self-end mr-60 z-10 relative">
        <Link href="/statement" className="flex flex-col items-center">
          <img src="/sticker button/rose.png" width={80} />
          <span className="text-sm">about me!!</span>
        </Link>
        <Link href="/skills" className="flex flex-col items-center">
          <img src="/sticker button/teddy.png" width={80} />
          <span className="text-sm">skills</span>
        </Link>
        <Link href="/projects" className="flex flex-col items-center">
          <img src="/sticker button/pearl.png" width={80} />
          <span className="text-sm">project</span>
        </Link>
      </div>

      <PinkContainer>
      I am passionate about volunteering and taking initiative in collaborative environments, where I can contribute to meaningful projects while supporting others. 
      I value opportunities to lead, organize, and participate in activities that bring people together, strengthen communities, and create positive impact. 
      Through these experiences, I continue to develop my communication, teamwork, and leadership skills while staying committed to helping others succeed.<br></br>
          <b>WiCS</b> (Active member)<br></br>
          <b>UIC Excel Club</b> (Active member)<br></br>
          <b>IDSSO</b> (Active member)<br></br>
      </PinkContainer>

      <ReturnButton/>
    </main>
  )
}

export default studentorgs