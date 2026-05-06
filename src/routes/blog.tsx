import { createFileRoute } from "@tanstack/react-router";
import { text } from "@/config/text";
import { images } from "@/config/images";

const blogImages = [images.blog1, images.blog2, images.blog3, images.blog4, images.blog5, images.blog6];

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Fitness Blog — IRONFORGE Gym" },
      { name: "description", content: "Expert fitness tips, workout plans, nutrition advice, and recovery strategies from IRONFORGE trainers." },
      { property: "og:title", content: "Fitness Blog — IRONFORGE Gym" },
      { property: "og:description", content: "Expert tips to fuel your fitness journey." },
    ],
  }),
});

function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-container">
        <div className="mb-12 text-center">
          <h1 className="section-title">{text.blogTitle}</h1>
          <p className="section-subtitle mx-auto">{text.blogSubtitle}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {text.blogPosts.map((post, i) => (
            <article key={i} className="card-surface group !p-0 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={blogImages[i]}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs">
                  <span className="offer-badge !text-[0.65rem]">{post.category}</span>
                  <span className="text-muted-foreground">{post.readTime} read</span>
                </div>
                <h2 className="text-lg font-bold leading-tight transition-colors group-hover:text-energy">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
