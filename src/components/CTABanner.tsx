import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";

export function CTABanner() {
  return (
    <section className="bg-energy">
      <div className="section-container !py-16 text-center">
        <h2 className="text-3xl font-black text-energy-foreground md:text-4xl">
          Ready to Transform Your Body?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-energy-foreground/90">
          {messages.guarantee}
        </p>
        <a href={buttons.bookTrial.link} className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-background px-8 py-4 text-lg font-bold uppercase tracking-wide text-foreground transition-all hover:-translate-y-1 hover:shadow-xl">
          {buttons.bookTrial.text} →
        </a>
        <p className="mt-4 text-sm font-semibold text-energy-foreground/80">{messages.urgency}</p>
      </div>
    </section>
  );
}
