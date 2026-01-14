import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, HelpCircle, Package, Shield } from "lucide-react";
import showroom from "@/assets/showroom.jpg";

const supportCards = [
  {
    icon: Package,
    title: "Shipping FAQ",
    description: "Free shipping on orders over $150. Express options available.",
  },
  {
    icon: HelpCircle,
    title: "Care & Cleaning",
    description: "Learn how to maintain your cookware for generations of use.",
  },
  {
    icon: Shield,
    title: "Warranty Claims",
    description: "Lifetime warranty on all products. We stand behind our craft.",
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 border-b border-foreground/10">
        <div className="container mx-auto px-6">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Get in Touch
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight">
            Expert Consultation
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Whether you're outfitting a professional kitchen or building your home collection, our concierge team is here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Showroom */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">
                  Visit Our Showroom
                </h2>
                <div className="aspect-[16/10] overflow-hidden border border-foreground/10">
                  <img
                    src={showroom}
                    alt="Nolan Hendree showroom interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm">Address</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Bernie Way 1966 Hampton<br />
                      Georgia 30228
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm">Hours</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mon-Sat: 10am - 7pm<br />
                      Sunday: 12pm - 5pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm">Phone</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      +1 2277275201
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm">Email</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      ucrjykipk159@hotmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-secondary p-8 md:p-12">
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">
                Request a Quote
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                For bulk orders, kitchen setups, or personalized recommendations.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="bg-background border-foreground/20 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background border-foreground/20 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                    I am a...
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="p-4 border border-foreground/20 hover:border-foreground text-left transition-colors"
                    >
                      <span className="font-bold block">Home Cook</span>
                      <span className="text-xs text-muted-foreground">Personal kitchen</span>
                    </button>
                    <button
                      type="button"
                      className="p-4 border border-foreground/20 hover:border-foreground text-left transition-colors"
                    >
                      <span className="font-bold block">Professional</span>
                      <span className="text-xs text-muted-foreground">Restaurant/Catering</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your needs..."
                    rows={5}
                    className="bg-background border-foreground/20 focus:border-accent resize-none"
                  />
                </div>

                <Button variant="hero" className="w-full">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support Cards */}
      <section className="py-16 bg-charcoal text-stone">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-xs font-mono uppercase tracking-widest text-stone/60 mb-12">
            Quick Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportCards.map((card) => (
              <Link
                key={card.title}
                to="#"
                className="group p-8 border border-stone/10 hover:border-accent/50 transition-all"
              >
                <card.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-bold uppercase tracking-wider mb-2 group-hover:text-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-stone/60">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
