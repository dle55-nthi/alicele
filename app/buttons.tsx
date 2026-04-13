import React from 'react'
import Link from 'next/link'

interface ButtonProp {
    link: string;
    picture: string;
    name: string;
}

export function MainPageButton({ link, picture, name }: ButtonProp) {
    return (
        <Link href={link} className="relative group flex flex-col items-center gap-2 transition-all duration-300">
            <div className="relative w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] flex items-end justify-center">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-300 bg-[#FFE3EA] scale-90 group-hover:scale-125"></div>
                <img src={picture} className="relative max-w-[80px] max-h-[80px] sm:max-w-[90px] sm:max-h-[90px] md:max-w-[100px] md:max-h-[100px] object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,227,234,0.9)]" />
            </div>
            <span className="text text-sm sm:text-base md:text-lg text-black transition-all duration-300 group-hover:tracking-widest ">
                {name}
            </span>
        </Link>
    );
}