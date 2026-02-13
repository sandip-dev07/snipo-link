import { BIO_DATA } from "@/constants/bio-data";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-4 pb-10 pt-8 text-white">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <h2 className="text-sm">
          {BIO_DATA.footer.text}{" "}
          <span className="underline">{BIO_DATA.footer.brand}</span>
        </h2>
      </div>
    </footer>
  );
}
