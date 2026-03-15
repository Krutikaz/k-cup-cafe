import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setSent(true);
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20 min-h-screen flex items-center justify-center">
      <div className="container-cafe max-w-md mx-auto section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl p-8">
          <h1 className="font-heading text-3xl font-bold mb-2 text-center">Reset Password</h1>
          {sent ? (
            <p className="text-muted-foreground text-center mt-4">Check your email for the reset link!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm" />
              </div>
              <button type="submit" disabled={loading} className="btn-primary-cafe w-full justify-center disabled:opacity-50">
                {loading ? "Sending..." : "Send Reset Link"} <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default ForgotPassword;
