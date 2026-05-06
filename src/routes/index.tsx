import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { OfferBanner } from "@/components/OfferBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrainersSection } from "@/components/TrainersSection";
import { FAQSection } from "@/components/FAQSection";
import { LeadForm } from "@/components/LeadForm";
import { CTABanner } from "@/components/CTABanner";
import { messages } from "@/config/messages";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "IRONFORGE Gym — Transform Your Body | Free Trial" },
      { name: "description", content: "Join the #1 fitness community near you. World-class equipment, expert trainers, 50+ classes weekly. Start your FREE 3-day trial today!" },
      { property: "og:title", content: "IRONFORGE Gym — Transform Your Body" },
      { property: "og:description", content: "Join 10,000+ members. Free 3-day trial, no commitment." },
    ],
  }),
});

function HomePage() {
  return (
    <>
      <OfferBanner />
      <HeroSection />

      <ServicesSection />

      <CTABanner />

      <TestimonialsSection />

      <TrainersSection />

      {/* Lead Form Section */}
      <section className="section-container" id="free-trial">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title mb-2">Start Your Free Trial</h2>
          <p className="section-subtitle mx-auto mb-8">{messages.noCommitment}</p>
          <LeadForm />
        </div>
      </section>

      <FAQSection />
    </>
  );
}
