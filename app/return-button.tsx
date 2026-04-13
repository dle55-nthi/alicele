import Link from 'next/link';

export default function ReturnButton () {
    return (
        <Link href="/" className="group flex flex-col items-center gap-2 transition-all duration-300">
            <div className="relative">
                <img src="/sticker button/pie.png" width={80} className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
                <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-300 bg-[#FFE3EA] scale-90 group-hover:scale-125"></div>
            </div>
            <span className="text-sm text-black transition-all duration-300 group-hover:tracking-widest">
                return home
            </span>
        </Link>
    )
}