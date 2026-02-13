import { Globe, Mail, Phone, type LucideIcon } from "lucide-react";
import { BIO_DATA } from "@/constants/bio-data";

type ContactIcon = (typeof BIO_DATA.contact)[number]["icon"];

const CONTACT_ICON_MAP: Record<ContactIcon, LucideIcon> = {
  phone: Phone,
  globe: Globe,
  mail: Mail,
};

export default function Contact() {
  return (
    <section className="w-full bg-transparent px-3 pb-4 sm:px-4 sm:pb-6">
      <div className="rounded-xl border border-zinc-800/80 bg-zinc-900">
        <div className="">
          {BIO_DATA.contact.map(({ label, value, href, icon }) => {
            const Icon = CONTACT_ICON_MAP[icon];
            return (
            <a
              key={label}
              href={href}
              target={label === "Website" ? "_blank" : undefined}
              rel={label === "Website" ? "noreferrer" : undefined}
              className="group flex items-center gap-1 rounded-xl px-1 py-1 transition"
              aria-label={label}
            >
              <span className="flex size-8 shrink-0 items-center justify-center text-zinc-300 transition group-hover:text-white">
                <Icon className="size-4" />
              </span>
              <span className="min-w-0 truncate text-base font-medium tracking-tight text-zinc-100">
                {value}
              </span>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
