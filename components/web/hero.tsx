"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import {
  ChevronDown,
  Facebook,
  Ghost,
  Instagram,
  Music2,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BIO_DATA } from "@/constants/bio-data";

type HeroSocialIcon = (typeof BIO_DATA.hero.socials)[number]["icon"];

const HERO_ICON_MAP: Record<HeroSocialIcon, LucideIcon> = {
  youtube: Youtube,
  instagram: Instagram,
  snapchat: Ghost,
  facebook: Facebook,
  x: Twitter,
  tiktok: Music2,
};

interface HeroSectionProps {
  image: string;
}

export default function HeroSection({ image }: HeroSectionProps) {
  const [showTopBadge, setShowTopBadge] = useState(false);

  const handleScroll = useCallback(() => {
    const threshold = window.innerHeight * BIO_DATA.hero.scrollThreshold;
    setShowTopBadge(window.scrollY > threshold);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section className="w-full">
      <div className="relative h-130 sm:h-160 w-full overflow-hidden">
        {/* Sticky header */}
        <div
          className={`fixed hidden max-w-xl fade-in mx-auto inset-x-0 top-0 z-20 bg-black/90 px-4 py-2 backdrop-blur-sm transition-all duration-300 ${
            showTopBadge ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className="relative size-8 overflow-hidden rounded-full"
              aria-hidden="true"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="32px"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-white">
                {BIO_DATA.hero.name}
              </span>
              <RiVerifiedBadgeFill className="size-4 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Hero image */}
        <Image
          src={image}
          alt={`${BIO_DATA.hero.name} profile hero image`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          unoptimized
        />

        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-black via-black/85 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 text-center md:px-10">
          <div className="mb-1 flex items-center justify-center gap-2">
            <h1 className="text-3xl font-bold leading-none md:text-4xl">
              {BIO_DATA.hero.name}
            </h1>
            <RiVerifiedBadgeFill className="size-6 text-blue-500 mt-1.5" />
          </div>

          {/* Social icons */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {BIO_DATA.hero.socials.map(({ name, href, icon }) => {
              const Icon = HERO_ICON_MAP[icon];
              return (
                <a
                  key={name}
                  href={href}
                  aria-label={`Visit ${name}`}
                  className="flex size-9 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 cursor-pointer"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>

          {/* Followers */}
          {BIO_DATA.hero.totalFollowers && (
            <button
              type="button"
              className="mx-auto mt-3 flex items-center gap-2 text-sm font-semibold tracking-tight cursor-pointer"
              aria-label="View follower breakdown"
            >
              <span className="text-yellow-400">
                {BIO_DATA.hero.totalFollowers}
              </span>{" "}
              Total Followers
              <ChevronDown className="size-4" />
            </button>
          )}

          {/* Description */}
          <p className="mx-auto mt-4 text-sm md:text-base tracking-wide text-white">
            {BIO_DATA.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
