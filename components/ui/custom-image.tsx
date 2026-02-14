"use client";

import Image, { type ImageProps } from "next/image";

const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGZpbHRlciBpZD0nYic+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMicvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScxNicgaGVpZ2h0PScxNicgZmlsbD0nIzE4MTgxYicgZmlsdGVyPSd1cmwoI2IpJy8+PC9zdmc+";

type CustomImageProps = ImageProps;

export default function CustomImage({
  loading,
  priority,
  placeholder = "blur",
  blurDataURL,
  ...props
}: CustomImageProps) {
  return (
    <Image
      loading={priority ? loading : loading ?? "lazy"}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={
        placeholder === "blur"
          ? blurDataURL ?? DEFAULT_BLUR_DATA_URL
          : blurDataURL
      }
      {...props}
    />
  );
}
