import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, XCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type AuthOauth = {
  getAuthorizationDetails: (id: string) => Promise<{ data: any; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: any; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: any; error: { message: string } | null }>;
};

const OAuthConsent = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) return setError("Missing authorization_id");
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/auth?next=" + encodeURIComponent(next);
        return;
      }
      const oauth = (supabase.auth as unknown as { oauth: AuthOauth }).oauth;
      const { data, error } = await oauth.getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) return setError(error.message);
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    const oauth = (supabase.auth as unknown as { oauth: AuthOauth }).oauth;
    const { data, error } = approve
      ? await oauth.approveAuthorization(authorizationId)
      : await oauth.denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      return setError(error.message);
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      return setError("No redirect returned by the authorization server.");
    }
    window.location.href = target;
  }

  return (
    <main className="pt-20 min-h-screen flex items-center justify-center">
      <div className="container-cafe max-w-md mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-8"
        >
          {error ? (
            <div className="text-center space-y-3">
              <XCircle className="w-10 h-10 text-destructive mx-auto" />
              <h1 className="font-heading text-2xl font-bold">Authorization failed</h1>
              <p className="text-sm text-muted-foreground break-words">{error}</p>
            </div>
          ) : !details ? (
            <div className="text-center space-y-3">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-secondary" />
              <p className="text-sm text-muted-foreground">Loading authorization request…</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <ShieldCheck className="w-10 h-10 text-secondary mx-auto mb-3" />
                <h1 className="font-heading text-2xl font-bold mb-2">
                  Connect {details.client?.name ?? "an app"}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {details.client?.name ?? "This client"} is requesting access to act as you on K Cup Cafe.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  disabled={busy}
                  onClick={() => decide(false)}
                  className="flex-1 px-4 py-3 rounded-xl border border-border text-sm font-medium hover:bg-muted transition disabled:opacity-50"
                >
                  Deny
                </button>
                <button
                  disabled={busy}
                  onClick={() => decide(true)}
                  className="flex-1 px-4 py-3 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/90 transition disabled:opacity-50"
                >
                  {busy ? "Working…" : "Approve"}
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default OAuthConsent;