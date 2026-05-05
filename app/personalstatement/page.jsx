import React from 'react'
import Link from 'next/link'
import PinkContainer from "@/app/container"
import SmallBox from "@/app/skills/component";
import Button from "@/app/buttons.tsx";

const Statement = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <section id = "statement">
        <PinkContainer>
          <div className="text-columns columns-1 md:columns-2 gap-[20px]">
            <div className="flex flex-col column space-y-4 justify-center">
              <p>i am a rising senior majoring in data science, concentrated in business analytics. 
                i enjoy building systems that make data feel less like numbers and more like
                something you can actually use.</p>
              <p>fun fact: i use my phone album as my diary, i take picture of everything! (like literally everything!!!) </p>
              <p>this summer, i am participating as a sprintern at UIC Innovation Center!</p>
              happy to connect with you!
              <div className='flex gap-2'>
                <SmallBox href="nguyenthii.ledacc@gmail.com">email</SmallBox>
                <SmallBox><a href = "https://www.linkedin.com/in/ldnthi12/">linkedin</a></SmallBox>
                <SmallBox><a href = "https://github.com/">github</a></SmallBox>
              </div>
            </div>

            <div className="column">
              <img src="/statement.JPG" width={350} className='rounded-2xl'/>
            </div>
          </div>
        </PinkContainer>
      </section>
    </main>
  )
}

export default Statement