import { Link } from "@tanstack/react-router";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Free Trial", to: "/free-trial" },
  { label: "Offers", to: "/offers" },
  { label: "Blog", to: "/blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-black tracking-wider text-foreground">
          {text.brandName}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "!text-energy" }}
            >
              {l.label}
            </Link>
          ))}
          <a href={buttons.callNow.link} className="btn-energy !py-2 !px-5 !text-sm">
            {buttons.callNow.text}
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden" aria-label="Menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-lg font-semibold text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a href={buttons.callNow.link} className="btn-energy mt-4 w-full text-center">
            {buttons.callNow.text}
          </a>
        </div>
      )}
    </nav>
  );
}
