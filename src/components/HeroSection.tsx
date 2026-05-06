import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";
import { messages } from "@/config/messages";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={images.hero} alt="Modern gym interior" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="section-container relative z-10 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-energy">
          {messages.socialProof}
        </p>
        <h1 className="section-title mx-auto max-w-4xl whitespace-pre-line text-5xl md:text-7xl">
          {text.heroTitle}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          {text.heroSubtitle}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href={buttons.bookTrial.link} className="btn-energy animate-pulse-glow text-lg">
            {buttons.bookTrial.text}
          </a>
          <a href={buttons.heroSecondary.link} className="btn-outline-energy text-lg">
            {buttons.heroSecondary.text}
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{messages.noCommitment}</p>
      </div>
    </section>
  );
}
