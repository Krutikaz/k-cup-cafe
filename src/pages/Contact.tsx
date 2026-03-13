import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown, Coffee, Wifi, CreditCard, Dog } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do you offer Wi-Fi?", a: "Yes! We offer free high-speed Wi-Fi for all customers. Just ask our barista for the password.", icon: Wifi },
  { q: "Are pets allowed?", a: "We love furry friends! Well-behaved dogs are welcome in our outdoor seating area. We even have complimentary water bowls.", icon: Dog },
  { q: "Do you accept card payments?", a: "Absolutely. We accept all major credit/debit cards, UPI, and digital wallets. Cash is also welcome.", icon: CreditCard },
  { q: "Can I book the cafe for a private event?", a: "Yes! We host private events, birthday parties, and corporate meetings. Contact us for custom packages and pricing.", icon: Coffee },
  { q: "Do you have vegan or gluten-free options?", a: "We offer a variety of plant-based milk alternatives (oat, almond, soy) and several gluten-free pastries and snacks.", icon: Coffee },
  { q: "What's the best time to visit?", a: "Weekday mornings (7–9 AM) are perfect for a quiet coffee. Weekends get lively after 10 AM with our brunch crowd. Evenings are cozy and relaxed.", icon: Clock },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "" }); }, 3000);
  };

  const isOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    if (day === 0) return hour >= 8 && hour < 20;
    if (day === 6) return hour >= 8 && hour < 22;
    return hour >= 7 && hour < 21;
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/5 to-transparent">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              >
                <Coffee className="w-4 h-4" /> We'd love to hear from you
              </motion.span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Get in Touch</h1>
              <p className="text-muted-foreground max-w-lg mx-auto text-lg">Whether it's a question, feedback, or just a hello — our doors (and inbox) are always open.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection>
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading text-xl font-bold mb-6">Send Us a Message</h2>
                {submitted ? (
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { key: "name", label: "Your Name", type: "text" },
                        { key: "email", label: "Email Address", type: "email" },
                      ].map((f) => (
                        <div key={f.key} className="relative">
                          <label className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${
                            focused === f.key || formState[f.key as keyof typeof formState]
                              ? "top-1 text-xs text-secondary font-medium"
                              : "top-3.5 text-sm text-muted-foreground"
                          }`}>
                            {f.label}
                          </label>
                          <input
                            type={f.type}
                            required
                            value={formState[f.key as keyof typeof formState]}
                            onChange={(e) => setFormState((s) => ({ ...s, [f.key]: e.target.value }))}
                            onFocus={() => setFocused(f.key)}
                            onBlur={() => setFocused(null)}
                            className="w-full pt-6 pb-2 px-4 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${
                        focused === "subject" || formState.subject
                          ? "top-1 text-xs text-secondary font-medium"
                          : "top-3.5 text-sm text-muted-foreground"
                      }`}>
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        className="w-full pt-6 pb-2 px-4 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${
                        focused === "message" || formState.message
                          ? "top-1 text-xs text-secondary font-medium"
                          : "top-3.5 text-sm text-muted-foreground"
                      }`}>
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        className="w-full pt-6 pb-2 px-4 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm resize-none"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn-primary-cafe w-full"
                    >
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {/* Map placeholder */}
                <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-secondary/10 to-accent/10 h-52 flex items-center justify-center border border-border relative">
                  <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzMzMyIvPjwvc3ZnPg==')]" />
                  <div className="text-center relative z-10">
                    <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-7 h-7 text-secondary" />
                    </div>
                    <p className="text-sm font-medium">123 Blossom Lane</p>
                    <p className="text-xs text-muted-foreground">Garden District, New Delhi</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 space-y-5">
                  <a href="tel:+15551234567" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium group-hover:text-secondary transition-colors">(555) 123-4567</p>
                    </div>
                  </a>
                  <a href="mailto:hello@kcupcafe.com" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium group-hover:text-secondary transition-colors">hello@kcupcafe.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Hours</p>
                      <p className="text-sm font-medium">Mon–Fri 7AM–9PM · Sat 8AM–10PM · Sun 8AM–8PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-border">
                    <span className={`w-2.5 h-2.5 rounded-full ${isOpen() ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
                    <span className={`text-sm font-medium ${isOpen() ? "text-green-600" : "text-red-500"}`}>
                      {isOpen() ? "Open Now" : "Currently Closed"}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/50">
        <div className="container-cafe max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about K Cup Cafe</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl border-none px-6 overflow-hidden">
                  <AccordionTrigger className="hover:no-underline py-5 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <faq.icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-heading font-semibold text-sm sm:text-base">{faq.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-5 pl-12">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;
