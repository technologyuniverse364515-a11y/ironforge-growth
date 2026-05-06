import { text } from "@/config/text";
import { images } from "@/config/images";

const avatars = [images.testimonial1, images.testimonial2, images.testimonial3, images.testimonial4];

export function TestimonialsSection() {
  return (
    <section className="bg-surface">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-title">{text.testimonialsTitle}</h2>
          <p className="section-subtitle mx-auto">{text.testimonialsSubtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {text.testimonials.map((t, i) => (
            <div key={i} className="card-surface flex flex-col gap-4">
              <div className="flex text-energy">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/90 italic leading-relaxed">"{t.quote}"</p>
              <div className="mt-auto flex items-center gap-3">
                <img src={avatars[i]} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
