import React from "react";
import Link from 'next/link';
import PinkContainer from "@/app/container";
import SmallBox from "@/app/skills/component";
import ReturnButton from "@/app/return-button";  

export default function skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-serif">
      
      {/* Nav buttons */}
      <div className="flex gap-2 items-end mb-[-20px] self-end mr-80 z-10 relative">
        <Link href="/personalstatement" className="flex flex-col items-center">
          <img src="/sticker button/rose.png" width={80} />
          <span className="text-sm">about me!!</span>
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
        <div className="flex gap-4 flex-wrap">
          <SmallBox>
            <div className="w-[100px] h-[100px] flex items-center justify-center">
              <img src="/sticker button/R_logo.png" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <h1>Front-end Code</h1>
            <p>3/5</p>
          </SmallBox>

          <SmallBox>
            <div className="w-[100px] h-[100px] flex items-center justify-center">
              <img src="/sticker button/sql.png" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <h1>SQL</h1>
            <p>4/5</p>
          </SmallBox>

          <SmallBox>
            <div className="w-[100px] h-[100px] flex items-center justify-center">
              <img src="/sticker button/powerbi.jpg" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <h1>PowerBI</h1>
            <p>4/5</p>
          </SmallBox>

          <SmallBox>
            <div className="w-[100px] h-[100px] flex items-center justify-center">
              <img src="/sticker button/c++.png" className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <h1>R/SAS</h1>
            <p>4/5</p>
          </SmallBox>
        </div>
      </PinkContainer>

      <ReturnButton/> 

    </div>
  );
}