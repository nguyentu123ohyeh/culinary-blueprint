import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react"; // Removed unused icons
import { products } from "@/data/productsData";
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id) || products[0];
  const [mainImage, setMainImage] = useState(product.image);

  // Sync mainImage if the product changes via URL
  useEffect(() => {
    setMainImage(product.image);
  }, [product]);

  const detailsList = product.details.split(" | ");

  return (
    <Layout>
      <div className="container mx-auto px-6 py-6">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>
      </div>

      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-4">
            <div className="aspect-square bg-white overflow-hidden border border-foreground/5 flex items-center justify-center p-8">
              <img
                src={mainImage}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`aspect-square bg-white border flex items-center justify-center p-2 ${
                    mainImage === img ? "border-charcoal" : "border-foreground/10"
                  } overflow-hidden transition-all hover:border-charcoal/50`}
                >
                  <img src={img} alt="Thumbnail" className="max-w-full max-h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">{product.name}</h1>
              <p className="text-2xl font-mono mt-2">${product.price}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Changed Button Section */}
            <div className="flex gap-4">
              <Button asChild variant="hero" className="flex-1 py-6 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="xl">♡</Button>
            </div>

            <div className="border-t border-foreground/10 pt-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Highlights</h3>
              <div className="grid grid-cols-1 gap-3">
                {detailsList.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-foreground/10 pt-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Material</h3>
              <p className="font-mono text-sm capitalize">{product.material}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}