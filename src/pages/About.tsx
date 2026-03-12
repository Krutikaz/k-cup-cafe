import { Link } from "react-router-dom";
import { ArrowRight, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";

const timeline = [
  { year: "2018", title: "The Dream Begins", desc: "Two friends with a shared passion for specialty coffee opened a small roastery." },
  { year: "2019", title: "First Location", desc: "K Cup Cafe found its home in the heart of Garden District." },
  { year: "2021", title: "Community Hub", desc: "We expanded with a reading nook, live music nights, and local art exhibits." },
  { year: "2023", title: "Award-Winning", desc: "Named 'Best Artisan Coffee Shop' by City Life Magazine." },
  { year: "2025", title: "Growing Family", desc: "Opened our second location and launched our signature bean subscription." },
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
    <section className="section-padding bg-muted/50">
      <div className="container-cafe">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-center mb-14">The Journey</h2>
        </AnimatedSection>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />
          {timeline.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className={`relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 mb-12 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                <div className="hidden sm:block w-1/2" />
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-background -translate-x-1.5 sm:-translate-x-1.5 mt-2" />
                <div className="ml-10 sm:ml-0 sm:w-1/2 glass-card rounded-xl p-6">
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
          <h2 className="font-heading text-3xl font-bold text-center mb-10">Gallery</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg cursor-pointer aspect-square bg-muted border-2 border-dashed border-border flex items-center justify-center"
              >
                <div className="text-center p-4">
                  <ImageIcon className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground/60">Gallery image {i}</p>
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
