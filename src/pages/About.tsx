import { Layout } from "@/components/layout/Layout";
import workshopForge from "@/assets/workshop-forge.jpg";

const timeline = [
  { year: "2020", title: "The Beginning", description: "Founded in New York by two passionate home cooks." },
  { year: "2021", title: "First Collection", description: "Launched our signature copper cookware line." },
  { year: "2022", title: "The Workshop", description: "Opened our manufacturing facility in upstate NY." },
  { year: "2023", title: "Going Global", description: "Expanded to 15 countries across 3 continents." },
  { year: "2024", title: "Sustainability", description: "Achieved carbon-neutral production status." },
  { year: "2026", title: "Innovation", description: "Introducing our next-generation cookware technology." },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-outline text-center">
            Beyond the Kitchen
          </h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Our Philosophy
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              We believe that exceptional tools inspire exceptional cooking. Every piece we create is designed to become an extension of your hand—intuitive, balanced, and built to last generations.
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span className="text-4xl font-black text-accent">01</span>
                <h3 className="mt-2 font-bold uppercase tracking-wider">Craftsmanship</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hand-finished by artisans with decades of experience.
                </p>
              </div>
              <div>
                <span className="text-4xl font-black text-accent">02</span>
                <h3 className="mt-2 font-bold uppercase tracking-wider">Durability</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Built to outlast trends and become heirlooms.
                </p>
              </div>
              <div>
                <span className="text-4xl font-black text-accent">03</span>
                <h3 className="mt-2 font-bold uppercase tracking-wider">Sustainability</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Responsibly sourced materials, carbon-neutral production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Workshop Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Behind the Scenes
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight">
              The Workshop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src={workshopForge}
                alt="Artisan forging metal with sparks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-charcoal flex items-center justify-center p-6">
                <div className="text-center">
                  <span className="text-5xl font-black text-accent">47</span>
                  <p className="mt-2 text-sm text-stone/60 font-mono uppercase">Artisans</p>
                </div>
              </div>
              <div className="aspect-square bg-secondary flex items-center justify-center p-6">
                <div className="text-center">
                  <span className="text-5xl font-black">12</span>
                  <p className="mt-2 text-sm text-muted-foreground font-mono uppercase">Countries</p>
                </div>
              </div>
              <div className="aspect-square bg-secondary flex items-center justify-center p-6">
                <div className="text-center">
                  <span className="text-5xl font-black">50K+</span>
                  <p className="mt-2 text-sm text-muted-foreground font-mono uppercase">Pieces Made</p>
                </div>
              </div>
              <div className="aspect-square bg-charcoal flex items-center justify-center p-6">
                <div className="text-center">
                  <span className="text-5xl font-black text-accent">∞</span>
                  <p className="mt-2 text-sm text-stone/60 font-mono uppercase">Passion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-charcoal text-stone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-stone/60">
              Our Journey
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight">
              Milestones
            </h2>
          </div>

          <div className="max-w-2xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone/20 transform md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 mt-1" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="font-mono text-accent text-sm">{item.year}</span>
                  <h3 className="font-bold uppercase tracking-wider mt-1">{item.title}</h3>
                  <p className="text-sm text-stone/60 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
