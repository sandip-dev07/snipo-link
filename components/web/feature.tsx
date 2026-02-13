import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { BIO_DATA } from "@/constants/bio-data";

export default function Feature() {
  return (
    <section className="w-full bg-transparent px-3 pb-4 sm:px-4 sm:pb-6">
      <div className="space-y-3 sm:space-y-4">
        {BIO_DATA.feature.map(({ title, image, href }) => (
          <a
            key={title}
            href={href}
            aria-label={`Watch: ${title}`}
            className="group relative block aspect-video overflow-hidden rounded-xl bg-zinc-900"
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover transition duration-300"
              unoptimized
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
    </section>
  );
}
