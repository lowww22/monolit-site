"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingCall() {
  return (
    <a
      href={site.contacts.phoneHref}
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition hover:scale-105 hover:bg-accent-hover sm:hidden"
      aria-label={`Позвонить ${site.contacts.phoneDisplay}`}
    >
      <Phone size={22} aria-hidden />
    </a>
  );
}
