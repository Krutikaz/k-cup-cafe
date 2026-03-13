import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle, ArrowRight, MapPin, Phone, Utensils, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

const seatingOptions = [
  { id: "indoor", label: "Indoor", icon: Utensils, desc: "Cozy interior seating" },
  { id: "outdoor", label: "Garden", icon: Sparkles, desc: "Open-air patio" },
  { id: "window", label: "Window", icon: MapPin, desc: "Scenic window seat" },
];

const Reservation = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "2", seating: "indoor", notes: "" });
  const [confirmed, setConfirmed] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/5 to-transparent">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              >
                <Utensils className="w-4 h-4" /> Reserve your spot
              </motion.span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Book a Table</h1>
              <p className="text-muted-foreground max-w-lg mx-auto text-lg">Secure your perfect spot at K Cup Cafe. Walk-ins welcome, reservations guaranteed.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {confirmed ? (
                  <motion.div
                    key="confirmed"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="glass-card rounded-2xl p-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-20 h-20 text-accent mx-auto mb-6" />
                    </motion.div>
                    <h2 className="font-heading text-2xl font-bold mb-2">Reservation Confirmed!</h2>
                    <p className="text-muted-foreground mb-6">We've saved a table for you.</p>
                    <div className="bg-muted/50 rounded-xl p-5 text-left space-y-3 mb-8 max-w-sm mx-auto">
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Name</span><span className="font-medium">{form.name}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Date</span><span className="font-medium">{form.date ? new Date(form.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : ""}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Time</span><span className="font-medium">{form.time}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Guests</span><span className="font-medium">{form.guests}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Seating</span><span className="font-medium capitalize">{form.seating}</span></div>
                    </div>
                    <button onClick={() => { setConfirmed(false); setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", seating: "indoor", notes: "" }); setStep(1); }} className="btn-secondary-cafe">
                      Make Another Reservation
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    {/* Step indicators */}
                    <div className="flex items-center gap-2 mb-6">
                      {[1, 2].map((s) => (
                        <button
                          key={s}
                          onClick={() => setStep(s)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            step === s ? "bg-secondary text-secondary-foreground shadow-md" : "bg-muted/50 text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            step === s ? "bg-secondary-foreground/20" : "bg-border"
                          }`}>{s}</span>
                          {s === 1 ? "Details" : "Preferences"}
                        </button>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
                      <AnimatePresence mode="wait">
                        {step === 1 ? (
                          <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-5">
                            <h2 className="font-heading text-lg font-bold mb-4">Your Details</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name</label>
                                <input required type="text" value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} className="w-full py-3 px-4 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm" placeholder="John Doe" />
                              </div>
                              <div>
                                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
                                <input required type="email" value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} className="w-full py-3 px-4 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm" placeholder="john@example.com" />
                              </div>
                            </div>
                            <div>
                              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone Number</label>
                              <input type="tel" value={form.phone} onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))} className="w-full py-3 px-4 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm" placeholder="+91 98765 43210" />
                            </div>
                            <div>
                              <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Date</label>
                              <input required type="date" min={today} value={form.date} onChange={(e) => setForm((s) => ({ ...s, date: e.target.value }))} className="w-full py-3 px-4 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm" />
                            </div>
                            <div>
                              <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Time</label>
                              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                {timeSlots.map((t) => (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => setForm((s) => ({ ...s, time: t }))}
                                    className={`py-2.5 rounded-lg text-xs font-medium transition-all ${
                                      form.time === t ? "bg-secondary text-secondary-foreground shadow-md" : "bg-muted/50 border border-border hover:border-secondary/50 text-muted-foreground hover:text-foreground"
                                    }`}
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              type="button"
                              onClick={() => setStep(2)}
                              disabled={!form.name || !form.email || !form.date || !form.time}
                              className="btn-primary-cafe w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Next: Preferences <ArrowRight className="w-4 h-4 ml-2" />
                            </motion.button>
                          </motion.div>
                        ) : (
                          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                            <h2 className="font-heading text-lg font-bold mb-4">Preferences</h2>
                            <div>
                              <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Number of Guests</label>
                              <div className="flex gap-2">
                                {["1", "2", "3", "4", "5", "6+"].map((g) => (
                                  <button
                                    key={g}
                                    type="button"
                                    onClick={() => setForm((s) => ({ ...s, guests: g }))}
                                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                      form.guests === g ? "bg-secondary text-secondary-foreground shadow-md" : "bg-muted/50 border border-border hover:border-secondary/50"
                                    }`}
                                  >
                                    {g}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="text-xs font-medium text-muted-foreground mb-3 block">Seating Preference</label>
                              <div className="grid grid-cols-3 gap-3">
                                {seatingOptions.map((opt) => (
                                  <button
                                    key={opt.id}
                                    type="button"
                                    onClick={() => setForm((s) => ({ ...s, seating: opt.id }))}
                                    className={`p-4 rounded-xl text-center transition-all border ${
                                      form.seating === opt.id
                                        ? "bg-secondary/10 border-secondary shadow-md"
                                        : "bg-muted/50 border-border hover:border-secondary/50"
                                    }`}
                                  >
                                    <opt.icon className={`w-5 h-5 mx-auto mb-2 ${form.seating === opt.id ? "text-secondary" : "text-muted-foreground"}`} />
                                    <p className="text-sm font-medium">{opt.label}</p>
                                    <p className="text-[10px] text-muted-foreground mt-0.5">{opt.desc}</p>
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Special Requests (optional)</label>
                              <textarea
                                rows={3}
                                value={form.notes}
                                onChange={(e) => setForm((s) => ({ ...s, notes: e.target.value }))}
                                className="w-full py-3 px-4 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm resize-none"
                                placeholder="Birthday celebration, high chair needed, dietary requirements..."
                              />
                            </div>
                            <div className="flex gap-3">
                              <button type="button" onClick={() => setStep(1)} className="btn-secondary-cafe flex-1">
                                Back
                              </button>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="btn-primary-cafe flex-1"
                              >
                                Confirm Reservation <CheckCircle className="w-4 h-4 ml-2" />
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <div className="glass-card rounded-2xl p-6 space-y-5">
                  <h3 className="font-heading font-bold text-lg">Visit Us</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">123 Blossom Lane</p>
                      <p className="text-xs text-muted-foreground">Garden District, New Delhi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">(555) 123-4567</p>
                      <p className="text-xs text-muted-foreground">Call for immediate reservations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Opening Hours</p>
                      <div className="text-xs text-muted-foreground space-y-0.5 mt-1">
                        <p>Mon–Fri: 7:00 AM – 9:00 PM</p>
                        <p>Saturday: 8:00 AM – 10:00 PM</p>
                        <p>Sunday: 8:00 AM – 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-sm mb-3">Good to Know</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span> Walk-ins are always welcome</li>
                    <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span> Reservations held for 15 minutes</li>
                    <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span> Free cancellation up to 2 hours before</li>
                    <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span> Groups of 6+ please call ahead</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reservation;
