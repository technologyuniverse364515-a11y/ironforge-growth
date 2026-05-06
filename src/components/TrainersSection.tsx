import { text } from "@/config/text";
import { images } from "@/config/images";
import { buttons } from "@/config/buttons";

const trainerImages = [images.trainer1, images.trainer2, images.trainer3];

export function TrainersSection() {
  return (
    <section className="section-container">
      <div className="mb-12 text-center">
        <h2 className="section-title">{text.trainersTitle}</h2>
        <p className="section-subtitle mx-auto">{text.trainersSubtitle}</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {text.trainers.map((t, i) => (
          <div key={i} className="card-surface group text-center !p-0 overflow-hidden">
            <div className="h-72 overflow-hidden">
              <img
                src={trainerImages[i]}
                alt={t.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="text-sm font-semibold text-energy">{t.specialty}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t.cert}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href={buttons.bookTrial.link} className="btn-energy">
          {buttons.bookTrial.text}
        </a>
      </div>
    </section>
  );
}
