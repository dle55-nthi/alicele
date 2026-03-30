import React from 'react'
import Link from "next/link"

export default function Home() {
  return (
    <main className="font-serif text-black min-h-screen relative"> 
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-16 items-end">
        <Link href="/personalstatement" className="flex flex-col items-center">
          <button className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] flex items-end justify-center">
              <img src="/sticker button/rose.png" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <span>about me!!</span>
          </button>
        </Link>

        <Link href="/skills" className="flex flex-col items-center">
          <button className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] flex items-end justify-center">
              <img src="/sticker button/teddy.png" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <span>skills</span>
          </button>
        </Link>

        <Link href="/studentorgs" className="flex flex-col items-center">
          <button className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] flex items-end justify-center">
              <img src="/sticker button/balletshoes.png" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <span>student orgs</span>
          </button>
        </Link>

        <Link href="/projects" className="flex flex-col items-center">
          <button className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] flex items-end justify-center">
              <img src="/sticker button/pearl.png" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <span>projects</span>
          </button>
        </Link>
      </div>

      <div className="absolute flex flex-col" style={{top: '40%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <img
          src="/profile.JPG"
          alt="Dac Nguyen Thi Le"
          className="rounded-full object-cover object-top"
          style={{width: 400, height: 400}}
        />
        <h1 className='absolute flex flex-col' style={{bottom:'0%', right:'0%', fontSize:'45px'}}>Thi Le</h1>
        <img src="/sticker button/home.png" className='absolute flex flex-col' style={{bottom:'0%', left:'0%'}} width={100}></img>
        <img src="/sticker button/pie.png" className='absolute flex flex-col' style={{top:'0%', left:'0%'}} width={100}></img>
        <img src="/sticker button/phone.png" className='absolute flex flex-col' style={{top:'50%', right:'-10%'}} width={100}></img>
      </div>
    </main>
  )
}