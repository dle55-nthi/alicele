import React from 'react'
import Link from 'next/link'

interface ButtonProp {
    link: string;
    picture: string;
    name: string;
}

export function MainPageButton({ link, picture, name }: ButtonProp) {
    return (
        <Link href={link} className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] flex items-end justify-center">
                <img src={picture} className="max-w-[100px] max-h-[100px] object-contain" />
            </div>
            <span>{name}</span>
        </Link>
    );
}