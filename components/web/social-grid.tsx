import type { ComponentType } from "react";
import Image from "next/image";
import { Link2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BIO_DATA } from "@/constants/bio-data";

type GridIcon = (typeof BIO_DATA.socialGrid)[number]["icon"];

const GRID_ICON_MAP: Record<GridIcon, ComponentType<{ className?: string }>> = {
  snapchat: FaSnapchatGhost,
  x: RiTwitterXFill,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
  link: Link2,
};

export default function SocialGrid() {
  return (
    <section className="w-full bg-transparent px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="grid gap-3 grid-cols-2">
        {BIO_DATA.socialGrid.map((item) => {
          const Icon = GRID_ICON_MAP[item.icon];
          const iconClassName = "iconClassName" in item ? item.iconClassName : undefined;
          return (
            <a
            key={item.title}
            href={item.href}
            className="group relative aspect-video overflow-hidden rounded-lg bg-zinc-900"
            aria-label={`Visit ${item.title}`}
          >
            <Image
              src={item.image}
              alt={`${item.title} cover`}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105"
              unoptimized
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <span className="absolute left-3 top-3 flex size-7 items-center justify-center rounded-full bg-white text-zinc-900 shadow-md">
              <Icon className={`size-3.5 ${iconClassName ?? ""}`} />
            </span>

            <p className="absolute inset-x-0 bottom-1 sm:bottom-1.5 text-center text-base font-medium text-white drop-shadow-sm md:text-md">
              {item.title}
            </p>
          </a>
          );
        })}
      </div>
    </section>
  );
}
