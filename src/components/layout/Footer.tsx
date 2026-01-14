import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-charcoal text-stone">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
              Épicure
            </Link>
            <p className="mt-4 text-stone/60 text-sm leading-relaxed">
              Precision in every detail. Crafted for those who understand that great cooking starts with exceptional tools.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {["Cookware", "Knives", "Dining", "Tools", "New Arrivals"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-stone/60 hover:text-stone transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {["Shipping & Returns", "Care & Cleaning", "Warranty", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    to="/contact"
                    className="text-sm text-stone/60 hover:text-stone transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-stone/60">
              <li>concierge@epicure.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-2">
                <span className="block">123 Culinary District</span>
                <span className="block">New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone/40 font-mono">
            © 2026 ÉPICURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-stone/40 font-mono">DURABLE</span>
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span className="text-xs text-stone/40 font-mono">SUSTAINABLE</span>
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span className="text-xs text-stone/40 font-mono">PROFESSIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
