import { createFileRoute } from "@tanstack/react-router";
import { text } from "@/config/text";
import { messages } from "@/config/messages";
import { images } from "@/config/images";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/free-trial")({
  component: FreeTrialPage,
  head: () => ({
    meta: [
      { title: "Free 3-Day Trial — IRONFORGE Gym" },
      { name: "description", content: "Claim your free 3-day gym pass. No credit card required. Full access to equipment, classes, and a complimentary personal training session." },
      { property: "og:title", content: "Free 3-Day Trial — IRONFORGE Gym" },
      { property: "og:description", content: "No commitment. No credit card. Just results." },
    ],
  }),
});

function FreeTrialPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.gym2} alt="Gym interior" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="section-container relative z-10 text-center">
          <span className="offer-badge mb-4 inline-block">Free Pass</span>
          <h1 className="section-title text-4xl md:text-6xl">{text.freeTrialTitle}</h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">{text.freeTrialSubtitle}</p>
        </div>
      </section>

      {/* Benefits + Form */}
      <section className="section-container">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Benefits */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">What You Get</h2>
            <ul className="space-y-4">
              {text.freeTrialBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-energy text-xs font-bold text-energy-foreground">✓</span>
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border border-energy/30 bg-energy/5 p-4">
              <p className="text-sm font-semibold text-energy">{messages.urgency}</p>
              <p className="mt-1 text-xs text-muted-foreground">{messages.guarantee}</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
