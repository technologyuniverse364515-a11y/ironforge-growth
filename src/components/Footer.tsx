import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-2xl font-black tracking-wider">{text.brandName}</p>
            <p className="mt-2 text-sm text-muted-foreground">{text.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-foreground/80 hover:text-energy">Home</Link>
              <Link to="/free-trial" className="block text-sm text-foreground/80 hover:text-energy">Free Trial</Link>
              <Link to="/offers" className="block text-sm text-foreground/80 hover:text-energy">Offers</Link>
              <Link to="/blog" className="block text-sm text-foreground/80 hover:text-energy">Blog</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">Contact</h4>
            <div className="space-y-2 text-sm text-foreground/80">
              <p>{text.footerAddress}</p>
              <a href={buttons.callNow.link} className="block hover:text-energy">{text.footerPhone}</a>
              <a href={`mailto:${text.footerEmail}`} className="block hover:text-energy">{text.footerEmail}</a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">Hours</h4>
            <p className="text-sm text-foreground/80">{text.footerHours}</p>
            <a href={buttons.bookTrial.link} className="btn-energy mt-4 !py-2 !px-4 !text-sm">
              {buttons.bookTrial.text}
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-lg border border-border">
          <iframe
            src={text.mapEmbed}
            className="h-64 w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gym Location"
          />
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {text.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
