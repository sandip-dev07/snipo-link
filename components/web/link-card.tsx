import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowUpRight, ShoppingBag, UserPlus, Youtube } from "lucide-react";
import { BIO_DATA } from "@/constants/bio-data";

type LinkCardIcon = (typeof BIO_DATA.linkCard)[number]["icon"];

const LINK_CARD_ICON_MAP: Record<
  LinkCardIcon,
  ComponentType<{ className?: string }>
> = {
  userPlus: UserPlus,
  youtube: Youtube,
  shoppingBag: ShoppingBag,
};

export default function LinkCard() {
  return (
    <section className="w-full bg-transparent px-3 pb-6 sm:px-4 sm:pb-8">
      <div className="space-y-3">
        {BIO_DATA.linkCard.map((card) => {
          const Icon = LINK_CARD_ICON_MAP[card.icon];
          return (
          <Link
            key={card.title}
            href={card.href}
            className="group relative block overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/90 px-4 py-3.5 transition hover:border-zinc-700 hover:bg-zinc-900"
            aria-label={card.title}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_45%)] opacity-70 transition group-hover:opacity-100" />

            <div className="relative flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900 text-white">
                <Icon className="size-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-semibold text-white sm:text-md">
                  {card.title}
                </p>
                <p className="truncate text-sm text-zinc-400">{card.label}</p>
              </div>

              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900 text-zinc-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </Link>
          );
        })}
      </div>
    </section>
  );
}
