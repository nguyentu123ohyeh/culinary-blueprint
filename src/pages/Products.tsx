import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import productPot from "@/assets/product-pot.jpg";
import productKnife from "@/assets/product-knife.jpg";
import productDining from "@/assets/product-dining.jpg";

const categories = [
  { id: "all", label: "All", icon: "◉" },
  { id: "cookware", label: "Cookware", icon: "◎" },
  { id: "knives", label: "Knives", icon: "◈" },
  { id: "dining", label: "Dining", icon: "◇" },
  { id: "tools", label: "Tools", icon: "◆" },
];

const filters = {
  material: ["Cast Iron", "Stainless Steel", "Copper", "Ceramic"],
  heatSource: ["Gas", "Electric", "Induction", "Oven"],
  price: ["Under $100", "$100-$300", "$300-$500", "Over $500"],
};

const products = [
  {
    id: 1,
    name: "Heritage Copper Pot",
    category: "cookware",
    price: 425,
    material: "Copper",
    image: productPot,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Chef's Knife 8\"",
    category: "knives",
    price: 195,
    material: "Carbon Steel",
    image: productKnife,
    badge: null,
  },
  {
    id: 3,
    name: "Artisan Dinner Set",
    category: "dining",
    price: 320,
    material: "Ceramic",
    image: productDining,
    badge: "New",
  },
  {
    id: 4,
    name: "Cast Iron Skillet 12\"",
    category: "cookware",
    price: 175,
    material: "Cast Iron",
    image: productPot,
    badge: null,
  },
  {
    id: 5,
    name: "Santoku Knife 7\"",
    category: "knives",
    price: 165,
    material: "Damascus Steel",
    image: productKnife,
    badge: "Professional",
  },
  {
    id: 6,
    name: "Serving Platter",
    category: "dining",
    price: 85,
    material: "Stoneware",
    image: productDining,
    badge: null,
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 border-b border-foreground/10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            The Pantry
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Professional-grade tools organized for the discerning cook. Every piece selected for performance and longevity.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 md:top-20 z-40 bg-background border-b border-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-4 -mx-6 px-6 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-charcoal text-stone"
                    : "hover:bg-secondary"
                }`}
              >
                <span className="text-xs">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-40 space-y-8">
              {Object.entries(filters).map(([key, values]) => (
                <div key={key}>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <div className="space-y-2">
                    {values.map((value) => (
                      <label
                        key={value}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div className="w-4 h-4 border border-foreground/30 group-hover:border-foreground transition-colors" />
                        <span className="text-sm">{value}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative aspect-square bg-stone-light overflow-hidden border border-foreground/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredProduct === product.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    {product.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal text-stone text-xs font-mono uppercase tracking-wider">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-bold uppercase tracking-wider text-sm group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <span className="font-mono text-sm">${product.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono">
                      {product.material}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
