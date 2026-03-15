import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import galleryLatte from "@/assets/gallery-latte.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryPastries from "@/assets/gallery-pastries.jpg";
import galleryRoasting from "@/assets/gallery-roasting.jpg";
import galleryFlatlay from "@/assets/gallery-flatlay.jpg";
import galleryBarista from "@/assets/gallery-barista.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryDesserts from "@/assets/gallery-desserts.jpg";

const timeline = [
  { year: "2018", title: "The Dream Begins", desc: "Two friends with a shared passion for specialty coffee opened a small roastery.", color: "from-amber-500/20 to-orange-500/20" },
  { year: "2019", title: "First Location", desc: "K Cup Cafe found its home in the heart of Garden District.", color: "from-emerald-500/20 to-teal-500/20" },
  { year: "2021", title: "Community Hub", desc: "We expanded with a reading nook, live music nights, and local art exhibits.", color: "from-violet-500/20 to-purple-500/20" },
  { year: "2023", title: "Award-Winning", desc: "Named 'Best Artisan Coffee Shop' by City Life Magazine.", color: "from-rose-500/20 to-pink-500/20" },
  { year: "2025", title: "Growing Family", desc: "Opened our second location and launched our signature bean subscription.", color: "from-sky-500/20 to-blue-500/20" },
];

const galleryImages = [
  { src: galleryLatte, alt: "Latte art being poured", label: "Latte Art" },
  { src: galleryInterior, alt: "Cozy cafe interior", label: "Our Space" },
  { src: galleryPastries, alt: "Freshly baked pastries", label: "Fresh Pastries" },
  { src: galleryRoasting, alt: "Coffee beans roasting", label: "Bean Roasting" },
  { src: galleryFlatlay, alt: "Coffee and croissant flatlay", label: "Morning Vibes" },
  { src: galleryBarista, alt: "Barista making latte art", label: "Our Baristas" },
  { src: galleryOutdoor, alt: "Outdoor seating area", label: "Outdoor Patio" },
  { src: galleryDesserts, alt: "Colorful macarons display", label: "Sweet Treats" },
];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="section-padding">
      <div className="container-cafe text-center">
        <AnimatedSection>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Born from a love for craft coffee and community, K Cup Cafe is more than a cafe — it's a gathering place where stories steep alongside espresso.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="container-cafe relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-center mb-4">The Journey</h2>
          <p className="text-muted-foreground text-center mb-14 max-w-md mx-auto">Every great cup has a story. Here's ours.</p>
        </AnimatedSection>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-primary sm:-translate-x-px" />
          {timeline.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className={`relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 mb-12 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                <div className="hidden sm:block w-1/2" />
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg shadow-secondary/30 -translate-x-2 sm:-translate-x-2 mt-2" />
                <div className={`ml-10 sm:ml-0 sm:w-1/2 rounded-xl p-6 bg-gradient-to-br ${item.color} backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-shadow duration-300`}>
                  <span className="text-xs font-bold text-secondary tracking-wider uppercase">{item.year}</span>
                  <h3 className="font-heading text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Counters */}
    <section className="section-padding">
      <div className="container-cafe">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={7} suffix="+" label="Years of Craft" />
          <AnimatedCounter end={50000} suffix="+" label="Happy Customers" />
          <AnimatedCounter end={120} suffix="+" label="Menu Items" />
          <AnimatedCounter end={15} label="Awards Won" />
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="section-padding bg-muted/50">
      <div className="container-cafe">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-center mb-4">Gallery</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-md mx-auto">A glimpse into the K Cup Cafe experience</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg cursor-pointer aspect-square relative group"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-primary-foreground font-heading font-semibold text-sm">{img.label}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-cafe text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold mb-4">Come Visit Us</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">We'd love to welcome you. Stop by for a cup, stay for the atmosphere.</p>
          <Link to="/contact" className="btn-primary-cafe">
            Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default About;
