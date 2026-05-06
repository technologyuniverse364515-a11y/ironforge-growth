import { createFileRoute } from "@tanstack/react-router";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";
import { images } from "@/config/images";

export const Route = createFileRoute("/offers")({
  component: OffersPage,
  head: () => ({
    meta: [
      { title: "Membership Offers — IRONFORGE Gym" },
      { name: "description", content: "50% off first 3 months, no joining fee. Explore our membership plans and lock in your rate today." },
      { property: "og:title", content: "Membership Offers — IRONFORGE Gym" },
      { property: "og:description", content: "Limited time: 50% off + no joining fee." },
    ],
  }),
});

function OffersPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.offerBg} alt="Gym workout" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="section-container relative z-10 text-center">
          <span className="offer-badge mb-4 inline-block">Limited Time</span>
          <h1 className="section-title text-4xl md:text-6xl">{text.offerTitle}</h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">{text.offerSubtitle}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-container">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {text.offers.map((offer, i) => (
            <div
              key={i}
              className={`card-surface relative flex flex-col ${i === 1 ? "border-energy ring-2 ring-energy" : ""}`}
            >
              <span className="offer-badge mb-4">{offer.badge}</span>
              <h3 className="text-xl font-bold">{offer.title}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-black text-energy">{offer.price}</span>
                <span className="mb-1 text-sm text-muted-foreground line-through">{offer.originalPrice}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {offer.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-energy">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={buttons.bookTrial.link} className={`mt-6 text-center ${i === 1 ? "btn-energy" : "btn-outline-energy"}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-semibold text-energy">{messages.urgencyOffer}</p>
        <p className="mt-2 text-center text-xs text-muted-foreground">{messages.noCommitment}</p>
      </section>
    </div>
  );
}
