import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  { name: "Sarah M.", rating: 5, text: "The most welcoming cafe I've ever been to. The caramel latte is an absolute dream — I come here every morning.", avatar: "SM" },
  { name: "James K.", rating: 5, text: "Incredible atmosphere for working remotely. Great Wi-Fi, better coffee, and the pastries are to die for.", avatar: "JK" },
  { name: "Emily R.", rating: 5, text: "Their attention to detail is unmatched. From the latte art to the playlists, everything feels intentional.", avatar: "ER" },
  { name: "David L.", rating: 4, text: "Best cold brew in the city, hands down. The reading nook is my weekend sanctuary.", avatar: "DL" },
];

const Experience = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-gradient-to-br from-primary via-espresso to-primary">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground/30">
            <ImageIcon className="w-16 h-16 mx-auto mb-3" />
            <p className="text-sm font-medium">Add your experience hero image</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative z-10 container-cafe h-full flex items-center justify-center text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">The Brew & Bloom Experience</h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">More than coffee — a sensory journey through taste, aroma, and warmth.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story sections */}
      <section className="section-padding">
        <div className="container-cafe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold mb-4">Crafted With Intention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every cup at Brew & Bloom starts with ethically sourced, single-origin beans roasted in small batches every morning. Our baristas are trained in the art and science of extraction — because great coffee isn't just made, it's composed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the grind to the pour, we obsess over every detail so you can simply enjoy the moment.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-xl bg-muted border-2 border-dashed border-border h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <ImageIcon className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground/60">Add your cafe experience image</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-xl bg-muted border-2 border-dashed border-border h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <ImageIcon className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground/60">Add your interior image</p>
                </div>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl font-bold mb-4">Your Third Place</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We designed every corner to feel like an extension of home. Sink into our velvet armchairs, browse our community bookshelf, or find your flow at our communal work tables.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Live acoustic sessions on Fridays, local art rotating monthly, and seasonal events that bring our neighborhood together.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-cafe">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl p-8 sm:p-10 text-center"
              >
                <Quote className="w-10 h-10 text-secondary/30 mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-6 italic leading-relaxed">
                  "{testimonials[testimonialIdx].text}"
                </p>
                <div className="flex justify-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonials[testimonialIdx].rating ? "fill-secondary text-secondary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">
                    {testimonials[testimonialIdx].avatar}
                  </div>
                  <span className="font-semibold text-sm">{testimonials[testimonialIdx].name}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setTestimonialIdx((i) => (i + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-cafe text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Experience It?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Come feel the warmth in person. We'll have your table ready.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/reservation" className="btn-primary-cafe">Book a Table</Link>
              <Link to="/contact" className="btn-secondary-cafe">Visit Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Experience;
