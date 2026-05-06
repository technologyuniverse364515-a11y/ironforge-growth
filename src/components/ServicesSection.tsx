import { text } from "@/config/text";
import { images } from "@/config/images";

const serviceImages = [
  images.strength,
  images.groupClass,
  images.personalTraining,
  images.cardio,
  images.recovery,
  images.nutrition,
];

export function ServicesSection() {
  return (
    <section className="section-container">
      <div className="mb-12 text-center">
        <h2 className="section-title">{text.servicesTitle}</h2>
        <p className="section-subtitle mx-auto">{text.servicesSubtitle}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {text.services.map((s, i) => (
          <div key={i} className="card-surface group overflow-hidden !p-0">
            <div className="h-48 overflow-hidden">
              <img
                src={serviceImages[i]}
                alt={s.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
