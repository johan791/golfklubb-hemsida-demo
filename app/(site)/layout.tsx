"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Chatbot from "@/app/components/Chatbot";

const NAV_ITEMS = [
  { href: "/", label: "Hem" },
  {
    href: "/spela",
    label: "Gäst",
    children: [
      { href: "/spela", label: "Greenfee & bokning" },
      { href: "/spela/hitta-hit", label: "Hitta hit" },
      { href: "/spela/boende", label: "Boende" },
    ],
  },
  {
    href: "/medlemskap",
    label: "Medlem",
    children: [
      { href: "/medlemskap", label: "Medlemskategorier" },
      { href: "/bli-medlem", label: "Bli medlem" },
      { href: "/senior", label: "Seniorgolf" },
    ],
  },
  {
    href: "/banan",
    label: "Banan",
    children: [
      { href: "/banan", label: "Översikt & status" },
      { href: "/banan/bokningsregler", label: "Bokningsregler" },
      { href: "/banan/driving-range", label: "Driving range & träning" },
      { href: "/banan/lokala-regler", label: "Slope & lokala regler" },
      { href: "/banan/regler-och-etikett", label: "Regler & etikett" },
    ],
  },
  {
    href: "/academy",
    label: "Akademi & Shop",
    children: [
      { href: "/academy", label: "Lektioner & kurser" },
      { href: "/academy/shop", label: "Shop & verkstad" },
      { href: "/academy/custom-fitting", label: "Custom Fitting" },
      { href: "/academy/golfresor", label: "Golfresor" },
    ],
  },
  {
    href: "/junior",
    label: "Junior",
    children: [
      { href: "/junior", label: "Träningsgrupper" },
      { href: "/junior/borja-tavla", label: "Börja tävla" },
    ],
  },
  {
    href: "/om-klubben",
    label: "Om klubben",
    children: [
      { href: "/om-klubben", label: "Historia" },
      { href: "/om-klubben/miljocertifiering", label: "Miljöcertifiering" },
      { href: "/om-klubben/dokument", label: "Stadgar & dokument" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
];

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1"
      >
        {item.label}
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-[var(--color-forest)] border border-white/10 rounded-lg shadow-xl py-1 min-w-48 z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-forest)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="https://www.ljgk.se/media/5scpdsyd/ljgk-logga_uppdaterad-inverterad.png?height=240"
              alt="Ljunghusens GK"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <div className="font-semibold text-sm tracking-wide">Ljunghusens GK</div>
              <div className="text-[10px] text-white/60 tracking-widest uppercase">Falsterbonäset sedan 1932</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem key={item.href} item={item} />
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
            aria-label="Meny"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--color-forest)] text-white/70 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-white text-sm mb-3">Ljunghusens GK</h3>
            <p className="text-sm leading-relaxed mb-3">
              27-hålsbana i naturreservat på Falsterbonäset. Grundad 1932.
            </p>
            <div className="space-y-1.5 text-sm">
              <Link href="/om-klubben" className="block hover:text-white transition-colors">Om klubben</Link>
              <Link href="/bli-medlem" className="block hover:text-white transition-colors">Bli medlem</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm mb-3">Kontakt</h3>
            <div className="space-y-1.5 text-sm">
              <p>040-45 80 00</p>
              <p>info@ljgk.se</p>
              <p>Vardag 08:30–16:00</p>
              <p>Helg 08:30–15:00</p>
              <p className="pt-1">Kinells väg 34, 236 42 Höllviken</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm mb-3">Snabblänkar</h3>
            <div className="space-y-1.5 text-sm">
              <Link href="/spela" className="block hover:text-white transition-colors">Greenfee & bokning</Link>
              <Link href="/medlemskap" className="block hover:text-white transition-colors">Medlemskap</Link>
              <Link href="/academy" className="block hover:text-white transition-colors">Akademi & Shop</Link>
              <Link href="/junior" className="block hover:text-white transition-colors">Junior</Link>
              <Link href="/senior" className="block hover:text-white transition-colors">Seniorgolf</Link>
              <Link href="/spela/boende" className="block hover:text-white transition-colors">Boende</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm mb-3">Restaurang Nermans</h3>
            <div className="space-y-1.5 text-sm">
              <p>040-45 35 81</p>
              <p>info@nermans.nu</p>
              <p>Dagligen 09:00–15:00</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-xs text-white/40 text-center">
          &copy; {new Date().getFullYear()} Ljunghusens Golfklubb. Miljöcertifierad golfklubb 🌿
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Chatbot />
    </>
  );
}
