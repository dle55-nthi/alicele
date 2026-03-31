import React from 'react'
import Link from 'next/link'

interface ButtonProp {
    link: string;
    picture: string;
    name: string;
}

export function MenuButton({ link, picture, name }: ButtonProp) {
    return (
        <Link href={link} className="flex flex-col items-center">
            <img src={picture} width={80}/>
            <span>{name}</span>
        </Link>
    );
}