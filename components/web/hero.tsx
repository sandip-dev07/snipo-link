"use client";

import { useEffect, useState, useCallback, type FormEvent } from "react";
import {
  ChevronDown,
  EllipsisVertical,
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
import { Button } from "../ui/button";
import CustomImage from "../ui/custom-image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type HeroSocialIcon = (typeof BIO_DATA.hero.socials)[number]["icon"];

const HERO_ICON_MAP: Record<HeroSocialIcon, LucideIcon> = {
  youtube: Youtube,
  instagram: Instagram,
  snapchat: Ghost,
  facebook: Facebook,
  x: Twitter,
  tiktok: Music2,
};

export type HeroData = {
  name: string;
  image: string;
  description: string;
  totalFollowers: string;
  scrollThreshold: number;
  socials: typeof BIO_DATA.hero.socials;
};

interface HeroSectionProps {
  heroData: HeroData;
  onUpdateHeroData: (heroData: HeroData) => void;
}

export default function HeroSection({
  heroData,
  onUpdateHeroData,
}: HeroSectionProps) {
  const [showTopBadge, setShowTopBadge] = useState(false);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState({
    name: heroData.name,
    image: heroData.image,
    description: heroData.description,
    totalFollowers: heroData.totalFollowers,
  });

  const handleScroll = useCallback(() => {
    const threshold = window.innerHeight * heroData.scrollThreshold;
    setShowTopBadge(window.scrollY > threshold);
  }, [heroData.scrollThreshold]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      setOpen(nextOpen);
      if (nextOpen) {
        setDraft({
          name: heroData.name,
          image: heroData.image,
          description: heroData.description,
          totalFollowers: heroData.totalFollowers,
        });
      }
    },
    [heroData]
  );

  const handleSaveBio = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onUpdateHeroData({
        ...heroData,
        name: draft.name.trim() || heroData.name,
        image: draft.image.trim() || heroData.image,
        description: draft.description.trim() || heroData.description,
        totalFollowers: draft.totalFollowers.trim(),
      });
      setOpen(false);
    },
    [draft, heroData, onUpdateHeroData]
  );

  const handleResetBio = useCallback(() => {
    onUpdateHeroData({
      ...heroData,
      name: BIO_DATA.hero.name,
      image: BIO_DATA.hero.image,
      description: BIO_DATA.hero.description,
      totalFollowers: BIO_DATA.hero.totalFollowers,
    });
    setDraft({
      name: BIO_DATA.hero.name,
      image: BIO_DATA.hero.image,
      description: BIO_DATA.hero.description,
      totalFollowers: BIO_DATA.hero.totalFollowers,
    });
    setOpen(false);
  }, [heroData, onUpdateHeroData]);

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
              <CustomImage
                src={heroData.image}
                alt=""
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-white">
                {heroData.name}
              </span>
              <RiVerifiedBadgeFill className="size-4 text-zinc-500" />
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-20 rounded-full bg-black/45 text-white hover:bg-black/70"
          onClick={() => setOpen(true)}
          aria-label="Edit bio data"
        >
          <EllipsisVertical className="h-4 w-4" />
        </Button>

        {/* Hero image */}
        <CustomImage
          src={heroData.image}
          alt={`${heroData.name} profile hero image`}
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-black via-black/85 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 text-center md:px-10">
          <div className="mb-1 flex items-center justify-center gap-2">
            <h1 className="text-3xl font-bold leading-none md:text-4xl">
              {heroData.name}
            </h1>
            <RiVerifiedBadgeFill className="size-6 text-zinc-500 mt-1.5" />
          </div>

          {/* Social icons */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {heroData.socials.map(({ name, href, icon }) => {
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
          {heroData.totalFollowers && (
            <button
              type="button"
              className="mx-auto mt-3 flex items-center gap-2 text-sm font-semibold tracking-tight cursor-pointer"
              aria-label="View follower breakdown"
            >
              <span className="text-yellow-400">
                {heroData.totalFollowers}
              </span>{" "}
              Total Followers
              <ChevronDown className="size-4" />
            </button>
          )}

          {/* Description */}
          <p className="mx-auto mt-4 text-sm md:text-base tracking-wide text-white">
            {heroData.description}
          </p>
        </div>
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="border-zinc-800 bg-zinc-950 text-white sm:max-w-lg rounded-2xl!">
          <DialogHeader>
            <DialogTitle>Edit Bio Data</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Update how this profile appears to users in the demo view.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveBio} className="space-y-4">
            <label className="block space-y-1.5">
              <span className="text-sm font-medium">Name</span>
              <input
                value={draft.name}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, name: event.target.value }))
                }
                className="w-full mt-2 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none ring-zinc-500 transition focus:ring-2"
                placeholder="Jane Doe"
              />
            </label>

            <label className="block space-y-1.5">
              <span className="text-sm font-medium">Description</span>
              <textarea
                value={draft.description}
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    description: event.target.value,
                  }))
                }
                className="min-h-20 mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none ring-zinc-500 transition focus:ring-2"
                placeholder="Lifestyle creator and fashion model"
              />
            </label>

            <label className="block space-y-1.5">
              <span className="text-sm font-medium">Total Followers</span>
              <input
                value={draft.totalFollowers}
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    totalFollowers: event.target.value,
                  }))
                }
                className="w-full mt-2 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none ring-zinc-500 transition focus:ring-2"
                placeholder="2.4M"
              />
            </label>

            <label className="block space-y-1.5">
              <span className="text-sm font-medium">Profile Image URL</span>
              <input
                value={draft.image}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, image: event.target.value }))
                }
                className="w-full mt-2 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none ring-zinc-500 transition focus:ring-2"
                placeholder="https://..."
              />
            </label>

            <DialogFooter>
              <Button type="button" onClick={handleResetBio}>
                Reset
              </Button>
              <Button variant={"secondary"} type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
