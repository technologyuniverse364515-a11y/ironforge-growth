import { text } from "@/config/text";

export function OfferBanner() {
  return (
    <div className="bg-energy py-3 text-center">
      <p className="text-sm font-bold tracking-wide text-energy-foreground md:text-base">
        {text.offerBanner}
      </p>
    </div>
  );
}
