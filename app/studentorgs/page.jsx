import React from 'react'
import Link from 'next/link'
import PinkContainer from "@/app/container";
import SmallBox from "@/app/skills/component";


const Studentorgs = () => {
  return (
    <main className="min-h-50 flex flex-col items-center justify-center">
      <section id = "orgs" className="flex flex-col justify-center text-center">
        <h1 className="text-6xl font-serif text-black/80 tracking-wide">student orgs</h1>
        <PinkContainer>
          <p className='mb-6'>I like being part of teams where people actually build things together whether that's organizing events, volunteering, or just helping ideas come to life. I enjoy stepping in where needed, keeping things moving, and making projects feel more connected and meaningful. I’m always open to collaborating with others who want to create impact, learn from each other, and make the process just as fun as the outcome.</p>
          <div className='flex flex-row gap-4 justify-center'>
            <SmallBox><b>WiCS</b></SmallBox>
            <SmallBox><b>UIC Excel Club <br/></b> Vice President</SmallBox>
            <SmallBox><b>IDSSO</b></SmallBox>
          </div>
        </PinkContainer>
      </section>
    </main>
  )
}
export default Studentorgs