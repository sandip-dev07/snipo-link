"use client";

import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaYoutube } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { BIO_DATA } from "@/constants/bio-data";
import CustomImage from "@/components/ui/custom-image";

const EMBLA_OPTIONS = {
  align: "start" as const,
  dragFree: true,
  containScroll: "trimSnaps" as const,
};

export default function FeatureCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full bg-transparent px-3 pb-4 sm:px-4">
      <div className="relative">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label="Previous feature"
          className="absolute cursor-pointer left-1 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-900/80 text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 sm:left-2"
        >
          <FaChevronLeft className="size-3.5" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          aria-label="Next feature"
          className="absolute cursor-pointer right-1 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full  bg-zinc-900/80 text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 sm:right-2"
        >
          <FaChevronRight className="size-3.5" />
        </button>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {BIO_DATA.feature.map(({ title, image, href }) => (
              <a
                key={title}
                href={href}
                aria-label={`Watch: ${title}`}
                className="group relative block aspect-video min-w-0 flex-[0_0_100%] mr-0.5 overflow-hidden rounded-xl bg-zinc-900"
              >
                {/* className="group relative mr-3 block aspect-video min-w-0 flex-[0_0_85%] overflow-hidden rounded-xl bg-zinc-900 sm:flex-[0_0_65%] lg:flex-[0_0_48%]"
                 */}
                <CustomImage
                  src={image}
                  alt={title}
                  fill
                  sizes="100vw"
                  className="object-cover transition duration-300"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <span className="absolute left-4 top-4 flex size-8 items-center justify-center rounded-full bg-white text-red-500 shadow-md">
                  <FaYoutube className="size-4" />
                </span>

                <p className="absolute inset-x-0 bottom-3 px-4 text-center text-md font-semibold leading-tight text-white drop-shadow-sm md:text-lg line-clamp-1">
                  {title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
