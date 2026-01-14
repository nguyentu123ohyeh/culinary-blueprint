import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Flame, Snowflake, Droplets } from "lucide-react";
import productPot from "@/assets/product-pot.jpg";
import productKnife from "@/assets/product-knife.jpg";

const productData: Record<string, {
  name: string;
  price: number;
  description: string;
  material: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  inBox: { icon: string; label: string }[];
  chefQuote: { text: string; author: string; title: string };
}> = {
  "1": {
    name: "Heritage Copper Pot",
    price: 425,
    description: "Our flagship copper pot combines centuries-old craftsmanship with modern engineering. The tri-ply construction ensures even heat distribution while the polished exterior brings timeless beauty to any kitchen.",
    material: "Copper / Stainless Steel Core",
    image: productPot,
    specs: [
      { label: "Weight", value: "4.2 lbs" },
      { label: "Diameter", value: "10 inches" },
      { label: "Capacity", value: "5 quarts" },
      { label: "Oven Safe", value: "500°F" },
      { label: "Construction", value: "Tri-ply" },
      { label: "Warranty", value: "Lifetime" },
    ],
    features: [
      "Hand-polished copper exterior",
      "Stay-cool brass handles",
      "Induction compatible base",
      "Dishwasher safe",
    ],
    inBox: [
      { icon: "pot", label: "Copper Pot" },
      { icon: "lid", label: "Fitted Lid" },
      { icon: "cloth", label: "Polishing Cloth" },
      { icon: "manual", label: "Care Guide" },
    ],
    chefQuote: {
      text: "The Heritage Pot has become indispensable in my kitchen. The heat control is unmatched—I can go from a rolling boil to the gentlest simmer in seconds.",
      author: "Marcus Chen",
      title: "Executive Chef, The Modern Table",
    },
  },
  "2": {
    name: "Chef's Knife 8\"",
    price: 195,
    description: "Forged from a single piece of high-carbon steel, this knife is the workhorse of any serious kitchen. The blade holds its edge through thousands of cuts.",
    material: "High-Carbon German Steel",
    image: productKnife,
    specs: [
      { label: "Blade Length", value: "8 inches" },
      { label: "Total Length", value: "13.5 inches" },
      { label: "Weight", value: "8.2 oz" },
      { label: "Hardness", value: "58 HRC" },
      { label: "Handle", value: "Pakkawood" },
      { label: "Warranty", value: "Lifetime" },
    ],
    features: [
      "Full tang construction",
      "Hand-sharpened 15° edge",
      "Ergonomic handle design",
      "Stain-resistant blade",
    ],
    inBox: [
      { icon: "knife", label: "Chef's Knife" },
      { icon: "sheath", label: "Blade Guard" },
      { icon: "stone", label: "Honing Guide" },
      { icon: "manual", label: "Care Guide" },
    ],
    chefQuote: {
      text: "Balance is everything in a chef's knife. This blade feels like a natural extension of my hand—precise, responsive, and effortless.",
      author: "Sofia Laurent",
      title: "Culinary Instructor, Le Cordon Bleu",
    },
  },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id || "1"] || productData["1"];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Main Product Section */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-stone-light overflow-hidden border border-foreground/5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square bg-stone-light border ${
                    i === 0 ? "border-foreground" : "border-foreground/10"
                  } overflow-hidden`}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-mono uppercase tracking-wider mb-4">
                <Check className="w-3 h-3" />
                Professional Grade
              </span>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                {product.name}
              </h1>
              <p className="text-2xl font-mono mt-2">${product.price}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Heat Compatibility Icons */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-accent" />
                <span className="text-xs font-mono uppercase">Gas</span>
              </div>
              <div className="flex items-center gap-2">
                <Snowflake className="w-5 h-5 text-accent" />
                <span className="text-xs font-mono uppercase">Induction</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-accent" />
                <span className="text-xs font-mono uppercase">Dishwasher</span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button variant="hero" className="flex-1">
                Add to Cart
              </Button>
              <Button variant="outline" size="xl">
                ♡
              </Button>
            </div>

            {/* Technical Specs Table */}
            <div className="border-t border-foreground/10 pt-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-center py-2 border-b border-foreground/5"
                  >
                    <span className="text-sm text-muted-foreground">{spec.label}</span>
                    <span className="font-mono text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's in the Box */}
            <div className="border-t border-foreground/10 pt-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                What's in the Box
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {product.inBox.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary flex items-center justify-center text-xs">
                      ◎
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Review */}
      <section className="bg-charcoal text-stone py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-stone/60 mb-6 block">
              Expert Review
            </span>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed italic">
              "{product.chefQuote.text}"
            </blockquote>
            <div className="mt-8">
              <p className="font-bold">{product.chefQuote.author}</p>
              <p className="text-sm text-stone/60">{product.chefQuote.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8 text-center">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 border border-foreground/10"
                >
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
