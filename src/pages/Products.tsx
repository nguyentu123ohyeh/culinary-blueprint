import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, filters, products } from "@/data/productsData";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilters, setActiveFilters] = useState<{ [key: string]: string[] }>({
    material: [],
    price: [],
  });
  const [hoveredProduct, setHoveredProduct] = useState<number | string | null>(null);

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    // 1. Category Filter
    const matchCategory = activeCategory === "all" || product.category === activeCategory;

    // 2. Sidebar Material Filter
    const matchMaterial =
      activeFilters.material.length === 0 || 
      activeFilters.material.includes(product.material);

    // 3. Sidebar Price Filter (Simplified logic)
    const matchPrice =
      activeFilters.price.length === 0 ||
      activeFilters.price.some((range) => {
        if (range === "Under $50") return product.price < 50;
        if (range === "$50-$100") return product.price >= 50 && product.price <= 100;
        if (range === "$100-$200") return product.price >= 100 && product.price <= 200;
        if (range === "Over $200") return product.price > 200;
        return true;
      });

    return matchCategory && matchMaterial && matchPrice;
  });

  const toggleFilter = (key: string, value: string) => {
    setActiveFilters((prev) => {
      const currentValues = prev[key] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [key]: newValues };
    });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 border-b border-foreground/10 bg-stone-light/30">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            The Pantry
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Professional-grade tools organized for the discerning cook. 
            Every piece selected for performance and longevity.
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
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
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
                        <input
                          type="checkbox"
                          className="hidden"
                          onChange={() => toggleFilter(key, value)}
                        />
                        <div className={`w-4 h-4 border border-foreground/30 transition-colors flex items-center justify-center ${
                          activeFilters[key]?.includes(value) ? "bg-charcoal border-charcoal" : "group-hover:border-foreground"
                        }`}>
                          {activeFilters[key]?.includes(value) && <span className="text-[10px] text-stone">✓</span>}
                        </div>
                        <span className={`text-sm ${activeFilters[key]?.includes(value) ? "font-bold" : "text-foreground/70"}`}>
                          {value}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Reset Button */}
              {(activeFilters.material.length > 0 || activeFilters.price.length > 0) && (
                <button 
                  onClick={() => setActiveFilters({ material: [], price: [] })}
                  className="text-xs font-mono uppercase underline text-accent hover:text-charcoal transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="group flex flex-col h-full"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Image Container - Using object-contain to show FULL image */}
                    <div className="relative aspect-square bg-white overflow-hidden border border-foreground/5 flex items-center justify-center p-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`max-w-full max-h-full object-contain transition-transform duration-700 ${
                          hoveredProduct === product.id ? "scale-110" : "scale-100"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-4 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-bold uppercase tracking-wider text-sm group-hover:text-accent transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <span className="font-mono text-sm shrink-0">${product.price}</span>
                      </div>
                      <div className="mt-auto pt-2">
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                          {product.material}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center border border-dashed border-foreground/20">
                <p className="text-muted-foreground font-mono">No products match your filters.</p>
                <button 
                  onClick={() => setActiveFilters({ material: [], price: [] })}
                  className="mt-4 text-sm font-bold uppercase underline"
                >
                  Show all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}