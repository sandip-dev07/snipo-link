"use client";

import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CustomImage from "@/components/ui/custom-image";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { BIO_DATA } from "@/constants/bio-data";

const EMBLA_OPTIONS = {
  align: "start" as const,
  dragFree: true,
  containScroll: "trimSnaps" as const,
};

export default function CarouselGallery() {
  type GalleryItem = (typeof BIO_DATA.gallery)[number];
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [emblaRef] = useEmblaCarousel(EMBLA_OPTIONS);

  const handleOpenItem = useCallback((item: GalleryItem) => {
    setSelectedItem(item);
  }, []);

  const handleCloseDialog = useCallback((open: boolean) => {
    if (!open) {
      setSelectedItem(null);
    }
  }, []);

  return (
    <section className="w-full bg-transparent px-3 pb-4 sm:px-4 sm:pb-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {BIO_DATA.gallery.map((item) => (
            <article
              key={item.alt}
              className="relative mr-3 aspect-square min-w-0 flex-[0_0_42%] overflow-hidden rounded-xl bg-zinc-900 sm:flex-[0_0_31%] lg:flex-[0_0_24%]"
            >
              <button
                type="button"
                onClick={() => handleOpenItem(item)}
                className="h-full w-full cursor-pointer"
                aria-label={`Open ${item.alt}`}
              >
                <div className="relative h-full w-full">
                  <CustomImage
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 42vw, (max-width: 1024px) 31vw, 24vw"
                    className="object-cover transition duration-300"
                  />
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={selectedItem !== null} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-md border-zinc-800 bg-zinc-950 p-3 text-white sm:max-w-xl backdrop-blur-md">
          {selectedItem && (
            <div className="space-y-3">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <CustomImage
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, 768px"
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
