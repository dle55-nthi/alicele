import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  src: string;
  alt?: string;
  position: "top-right" | "bottom-left";
};

export default function StickerButton({ href, src, alt, position }: Props) {
  const positionClass =
    position === "top-right"
      ? "absolute top-4 right-4"
      : "absolute bottom-4 left-4";

  return (
    <Link href={href} className={positionClass}>
      <Image
        src={src}
        alt={alt || "sticker"}
        width={80}
        height={80}
        className="hover:scale-110 transition"
      />
    </Link>
  );
}