import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.includes("type=recovery")) {
      navigate("/auth");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast({ title: "Password updated!", description: "You can now sign in with your new password." });
      navigate("/auth");
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
          <h1 className="font-heading text-3xl font-bold mb-6 text-center">Set New Password</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" required minLength={6} className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm" />
            </div>
            <button type="submit" disabled={loading} className="btn-primary-cafe w-full justify-center disabled:opacity-50">
              {loading ? "Updating..." : "Update Password"} <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default ResetPassword;
