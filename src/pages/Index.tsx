import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import heroCookware from "@/assets/hero-cookware.jpg";
import productPot from "@/assets/product-pot.jpg";
import productKnife from "@/assets/product-knife.jpg";
import productDining from "@/assets/product-dining.jpg";

const materials = [
  {
    id: "cast-iron",
    name: "Cast Iron",
    description: "Unmatched heat retention and durability. Our cast iron pieces are hand-seasoned and ready to use, developing a natural non-stick patina over time.",
  },
  {
    id: "stainless-steel",
    name: "Stainless Steel",
    description: "Professional-grade 5-ply construction for even heat distribution. Dishwasher safe, oven safe to 500°F, and built for a lifetime of use.",
  },
  {
    id: "ceramic",
    name: "Ceramic",
    description: "Hand-crafted stoneware with natural mineral glazes. Food-safe, microwave-friendly, and designed to transition beautifully from oven to table.",
  },
];

export default function Index() {
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={heroCookware}
                  alt="Premium copper cookware with steam rising"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent opacity-50" />
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Est. 2020 · New York
                </span>
                <h1 className="hero-title">
                  Precision
                  <br />
                  <span className="text-outline">in Every</span>
                  <br />
                  Detail
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Exceptional cookware and tools for those who understand that great cooking starts with exceptional equipment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" asChild>
                  <Link to="/products">
                    Shop the Essentials
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-6 bg-charcoal text-stone overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-sm font-mono uppercase tracking-widest">Durable</span>
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm font-mono uppercase tracking-widest">Sustainable</span>
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm font-mono uppercase tracking-widest">Professional</span>
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm font-mono uppercase tracking-widest">Handcrafted</span>
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm font-mono uppercase tracking-widest">Timeless</span>
                <span className="w-2 h-2 bg-accent rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid - Chef's Kit */}
      <section className="py-24 grid-lines">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              The Collection
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight">
              Chef's Kit
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large - Cookware */}
            <Link
              to="/products"
              className="col-span-2 row-span-2 group relative overflow-hidden border border-foreground/10 card-hover"
            >
              <img
                src={productPot}
                alt="Premium copper cookware"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-mono uppercase tracking-widest text-accent">
                  Collection
                </span>
                <h3 className="text-2xl font-bold text-stone mt-1">Cookware</h3>
              </div>
            </Link>

            {/* Medium - Knives */}
            <Link
              to="/products"
              className="col-span-1 row-span-1 group relative overflow-hidden border border-foreground/10 card-hover aspect-square"
            >
              <img
                src={productKnife}
                alt="Professional chef's knife"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-stone">Knives</h3>
              </div>
            </Link>

            {/* Small - Badge */}
            <div className="col-span-1 row-span-1 bg-charcoal flex items-center justify-center p-6">
              <div className="text-center">
                <Zap className="w-6 h-6 text-accent mx-auto mb-2" />
                <span className="text-xs font-mono uppercase tracking-widest text-stone/60">
                  New Tech
                </span>
                <p className="text-sm font-bold text-stone mt-1">2026 Line</p>
              </div>
            </div>

            {/* Medium - Dining */}
            <Link
              to="/products"
              className="col-span-1 row-span-1 group relative overflow-hidden border border-foreground/10 card-hover aspect-square"
            >
              <img
                src={productDining}
                alt="Elegant table setting"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-stone">Dining</h3>
              </div>
            </Link>

            {/* Small - Scrolling Text */}
            <div className="col-span-1 row-span-1 bg-secondary flex items-center justify-center overflow-hidden">
              <div className="animate-pulse">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  View All →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Explorer */}
      <section className="py-24 bg-charcoal text-stone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-stone/60">
              Our Materials
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight">
              Material Explorer
            </h2>
            <p className="mt-4 text-stone/60 max-w-xl mx-auto">
              Every piece tells a story of craftsmanship. Click to discover why we choose these materials.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {materials.map((material) => (
              <button
                key={material.id}
                onClick={() => setActiveMaterial(activeMaterial === material.id ? null : material.id)}
                className={`px-8 py-4 border font-mono text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeMaterial === material.id
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-stone/20 text-stone hover:border-stone/40"
                }`}
              >
                {material.name}
              </button>
            ))}
          </div>

          {activeMaterial && (
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              <p className="text-lg text-stone/80 leading-relaxed">
                {materials.find((m) => m.id === activeMaterial)?.description}
              </p>
            </div>
          )}

          {!activeMaterial && (
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm text-stone/40 font-mono">
                Select a material to learn more
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            Ready to Elevate Your Kitchen?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Join thousands of home cooks and professional chefs who trust Épicure.
          </p>
          <Button variant="hero" asChild>
            <Link to="/products">
              Explore the Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
