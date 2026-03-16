import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Clock, Sparkles, Coffee, MapPin, Quote, Users, Award, Leaf } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroVideo from "@/assets/hero-cafe-video.mp4";
import latteArt from "@/assets/latte-art.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import pastries from "@/assets/pastries.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import galleryBarista from "@/assets/gallery-barista.jpg";
import galleryLatte from "@/assets/gallery-latte.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryDesserts from "@/assets/gallery-desserts.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryPastries from "@/assets/gallery-pastries.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";

const heroTaglines = [
  "Where Every Cup Tells a Story",
  "Artisan Coffee, Crafted With Love",
  "A Cozy Corner in Every Sip",
];

const dailySpecials = [
  { name: "Caramel Cloud Latte", price: "₹349", desc: "Velvety espresso with house-made caramel" },
  { name: "Lavender Honey Croissant", price: "₹249", desc: "Buttery layers with floral sweetness" },
];

const features = [
  { icon: Star, title: "Ethically Sourced", desc: "Single-origin beans from sustainable farms worldwide" },
  { icon: Clock, title: "Freshly Roasted", desc: "Small-batch roasting every morning for peak flavor" },
  { icon: Sparkles, title: "Handcrafted", desc: "Every drink made with precision and artistry" },
];

const stats = [
  { value: 15000, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Coffee Varieties" },
  { value: 8, suffix: "", label: "Years of Excellence" },
  { value: 12, suffix: "", label: "Expert Baristas" },
];

const testimonials = [
  { name: "Ananya S.", text: "The best cold brew I've ever had! The ambiance is so cozy, I come here every weekend.", rating: 5 },
  { name: "Rohan M.", text: "Their lavender croissants are divine. The staff is incredibly warm and welcoming.", rating: 5 },
  { name: "Priya K.", text: "Perfect place for remote work. Great Wi-Fi, amazing coffee, and the pastries keep me coming back.", rating: 5 },
];

const popularItems = [
  { name: "Caramel Cloud Latte", price: "₹349", img: latteArt, tag: "Bestseller" },
  { name: "Artisan Pastries", price: "from ₹199", img: pastries, tag: "Fresh Daily" },
  { name: "Single Origin Pour Over", price: "₹299", img: coffeeBeans, tag: "Staff Pick" },
  { name: "Belgian Chocolate Brownie", price: "₹279", img: galleryDesserts, tag: "New" },
];

const galleryImages = [
  { src: galleryBarista, alt: "Expert barista crafting latte art" },
  { src: galleryLatte, alt: "Beautiful latte art in a ceramic cup" },
  { src: galleryOutdoor, alt: "Relaxing outdoor seating area" },
  { src: galleryInterior, alt: "Warm and cozy cafe interior" },
  { src: galleryPastries, alt: "Freshly baked pastries display" },
  { src: cafeInterior, alt: "Sunlit reading corner" },
];

const Index = () => {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroTaglines.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[500px] sm:min-h-[600px] overflow-hidden">
        <video src={heroVideo} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/40" />
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
                className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6"
              >
                {heroTaglines[heroIdx]}
              </motion.h1>
            </AnimatePresence>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-md"
            >
              Artisan coffee, fresh pastries, and a warm atmosphere where community blossoms.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Link to="/menu" className="btn-primary-cafe bg-secondary text-secondary-foreground hover:bg-caramel text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3">
                View Menu <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/reservation" className="btn-secondary-cafe border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3">
                Book a Table
              </Link>
            </motion.div>
            <div className="flex gap-2 mt-10">
              {heroTaglines.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === heroIdx ? "bg-secondary w-8" : "bg-primary-foreground/40"
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
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Why K Cup Cafe?</h2>
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

      {/* Stats Counter */}
      <section className="bg-espresso text-espresso-foreground py-16">
        <div className="container-cafe">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} label={stat.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="section-padding">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">Fan Favorites</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-4">Most Loved Items</h2>
              <p className="text-muted-foreground max-w-md mx-auto">Handpicked favorites that our customers can't stop raving about.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">{item.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold mb-1">{item.name}</h3>
                    <p className="text-secondary font-bold">{item.price}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="btn-primary-cafe">
              Explore Full Menu <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
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
                  From the aroma of freshly ground beans to the warmth of our sun-drenched reading nook, every corner of K Cup Cafe is designed to make you feel at home.
                </p>
                <Link to="/about" className="btn-primary-cafe">
                  Our Story <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[latteArt, cafeInterior, pastries].map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className={`rounded-2xl overflow-hidden shadow-lg ${
                      i === 2 ? "col-span-2 h-40" : i === 1 ? "mt-8 h-48" : "h-48"
                    }`}
                  >
                    <img src={img} alt="K Cup Cafe" className="w-full h-full object-cover" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-4">What Our Guests Say</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-8 hover-lift relative">
                  <Quote className="w-8 h-8 text-secondary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed italic">"{t.text}"</p>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram-style Gallery */}
      <section className="section-padding bg-muted/30">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">Gallery</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-4">Moments at K Cup</h2>
              <p className="text-muted-foreground max-w-md mx-auto">A glimpse into the everyday magic that happens here.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-md ${i === 0 || i === 5 ? "md:row-span-2 h-44 sm:h-52 md:h-full md:min-h-[280px]" : "h-44 sm:h-52"}`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-4">What We Stand For</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Sustainability", desc: "We use eco-friendly packaging, compostable cups, and source from farms committed to regenerative agriculture." },
              { icon: Users, title: "Community First", desc: "From open mic nights to art exhibitions, we believe in creating a space where neighbors become friends." },
              { icon: Award, title: "Quality Obsessed", desc: "Every bean is hand-selected, every recipe tested dozens of times. We never compromise on quality." },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <v.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us / Map */}
      <section className="section-padding bg-muted/50">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-secondary font-medium text-sm uppercase tracking-wider">Find Us</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-6">Visit K Cup Cafe</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Garden District, Main Street</p>
                      <p className="text-sm text-muted-foreground">Near Central Park, Downtown</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Open Daily</p>
                      <p className="text-sm text-muted-foreground">Mon – Fri: 7 AM – 10 PM</p>
                      <p className="text-sm text-muted-foreground">Sat – Sun: 8 AM – 11 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Happy Hour</p>
                      <p className="text-sm text-muted-foreground">Every weekday 3 PM – 5 PM — 20% off all drinks</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/contact" className="btn-primary-cafe">
                    Get Directions <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-56 sm:h-72 lg:h-80">
                <img src={galleryOutdoor} alt="K Cup Cafe outdoor seating" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="bg-espresso rounded-2xl sm:rounded-3xl p-8 sm:p-16 text-center text-espresso-foreground relative overflow-hidden">
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
