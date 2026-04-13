import React from 'react'
import Link from 'next/link'

interface ButtonProp {
    link: string;
    picture: string;
    name: string;
}
export function MenuButton({ link, picture, name }: ButtonProp) {
    return (
        <Link href={link} className="relative group flex flex-col items-center gap-2 transition-all duration-300">
            <div className="relative w-[70px] h-[70px] sm:w-[75px] sm:h-[75px] md:w-[80px] md:h-[80px] flex items-end justify-center">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-300 bg-[#FFE3EA] scale-90 group-hover:scale-125"></div>
                <img src={picture} className="relative max-w-[70px] max-h-[70px] sm:max-w-[75px] sm:max-h-[75px] md:max-w-[80px] md:max-h-[80px] object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,227,234,0.9)]"
                />
            </div>

            <span className="text-sm text-black transition-all duration-300 group-hover:tracking-widest">
                {name}
            </span>
        </Link>
    );
}