import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Clock, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroCafe from "@/assets/hero-cafe.jpg";
import latteArt from "@/assets/latte-art.jpg";
import pastries from "@/assets/pastries.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

const heroImages = [heroCafe, latteArt, pastries];
const heroTaglines = [
  "Where Every Cup Tells a Story",
  "Artisan Coffee, Crafted With Love",
  "A Cozy Corner in Every Sip",
];

const dailySpecials = [
  { name: "Caramel Cloud Latte", price: "$5.50", desc: "Velvety espresso with house-made caramel" },
  { name: "Lavender Honey Croissant", price: "$4.25", desc: "Buttery layers with floral sweetness" },
];

const features = [
  { icon: Star, title: "Ethically Sourced", desc: "Single-origin beans from sustainable farms worldwide" },
  { icon: Clock, title: "Freshly Roasted", desc: "Small-batch roasting every morning for peak flavor" },
  { icon: Sparkles, title: "Handcrafted", desc: "Every drink made with precision and artistry" },
];

const Index = () => {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIdx}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img src={heroImages[heroIdx]} alt="Cafe" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 container-cafe h-full flex items-center">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" /> Now Open · Garden District
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h1
                key={heroIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6"
              >
                {heroTaglines[heroIdx]}
              </motion.h1>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-cream/80 text-lg mb-8 max-w-md"
            >
              Artisan coffee, fresh pastries, and a warm atmosphere where community blossoms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/menu" className="btn-primary-cafe bg-secondary text-secondary-foreground hover:bg-caramel">
                View Menu <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/reservation" className="btn-secondary-cafe border-cream/40 text-cream hover:bg-cream/10">
                Book a Table
              </Link>
            </motion.div>

            {/* Hero dots */}
            <div className="flex gap-2 mt-10">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === heroIdx ? "bg-secondary w-8" : "bg-cream/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Daily Special */}
      <section className="bg-secondary/10 border-y border-secondary/20">
        <div className="container-cafe py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Today's Special</span>
            <span className="text-sm text-foreground font-medium">{dailySpecials[0].name} — {dailySpecials[0].price}</span>
          </div>
          <Link to="/menu" className="text-sm text-secondary font-medium hover:underline flex items-center gap-1">
            See full menu <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Why Brew & Bloom?</h2>
              <p className="text-muted-foreground max-w-md mx-auto">More than a coffee shop — a sanctuary for the senses.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-8 text-center hover-lift group cursor-default">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <f.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-muted/50">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Step Into Our World</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From the aroma of freshly ground beans to the warmth of our sun-drenched reading nook, every corner of Brew & Bloom is designed to make you feel at home.
                </p>
                <Link to="/experience" className="btn-primary-cafe">
                  Explore the Experience <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={latteArt} alt="Latte art" className="w-full h-48 object-cover" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg mt-8">
                  <img src={cafeInterior} alt="Cafe interior" className="w-full h-48 object-cover" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg col-span-2">
                  <img src={pastries} alt="Pastries" className="w-full h-40 object-cover" />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="bg-espresso rounded-3xl p-10 sm:p-16 text-center text-espresso-foreground relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,hsl(32,60%,50%),transparent_70%)]" />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Reserve Your Table</h2>
                <p className="text-espresso-foreground/70 mb-8 max-w-md mx-auto">
                  Whether it's a quiet morning or a lively evening, we've saved a spot just for you.
                </p>
                <Link to="/reservation" className="btn-primary-cafe bg-secondary text-secondary-foreground hover:bg-caramel">
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
