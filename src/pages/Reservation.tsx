import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

const Reservation = () => {
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "", guests: "2" });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Reserve a Table</h1>
              <p className="text-muted-foreground max-w-md mx-auto">Secure your spot at Brew & Bloom. Walk-ins are welcome, but reservations guarantee your perfect table.</p>
            </div>
          </AnimatedSection>

          <div className="max-w-xl mx-auto">
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
                  <div className="bg-muted/50 rounded-xl p-5 text-left space-y-3 mb-8">
                    <div className="flex justify-between text-sm"><span className="text-muted-foreground">Name</span><span className="font-medium">{form.name}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-muted-foreground">Date</span><span className="font-medium">{new Date(form.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-muted-foreground">Time</span><span className="font-medium">{form.time}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-muted-foreground">Guests</span><span className="font-medium">{form.guests}</span></div>
                  </div>
                  <button onClick={() => { setConfirmed(false); setForm({ name: "", email: "", date: "", time: "", guests: "2" }); }} className="btn-secondary-cafe">
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                    {/* Name & Email */}
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

                    {/* Date */}
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Date</label>
                      <input required type="date" min={today} value={form.date} onChange={(e) => setForm((s) => ({ ...s, date: e.target.value }))} className="w-full py-3 px-4 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm" />
                    </div>

                    {/* Time */}
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

                    {/* Guests */}
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

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={!form.name || !form.email || !form.date || !form.time}
                      className="btn-primary-cafe w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Confirm Reservation <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reservation;
