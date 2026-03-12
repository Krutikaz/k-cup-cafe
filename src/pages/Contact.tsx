import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormState({ name: "", email: "", message: "" }); }, 3000);
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
      <section className="section-padding">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-muted-foreground max-w-md mx-auto">We'd love to hear from you — whether it's a question, feedback, or just a hello.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection>
              <div className="glass-card rounded-2xl p-8">
                {submitted ? (
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      { key: "name", label: "Your Name", type: "text" },
                      { key: "email", label: "Email Address", type: "email" },
                    ].map((f) => (
                      <div key={f.key} className="relative">
                        <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
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
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
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
                <div className="rounded-2xl overflow-hidden shadow-lg bg-muted h-48 flex items-center justify-center border border-border">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">123 Blossom Lane, Garden District</p>
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
    </main>
  );
};

export default Contact;
