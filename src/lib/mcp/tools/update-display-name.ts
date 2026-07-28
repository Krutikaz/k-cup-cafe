import { createClient } from "@supabase/supabase-js";
import { defineTool, type ToolContext } from "@lovable.dev/mcp-js";
import { z } from "zod";

function supabaseForUser(ctx: ToolContext) {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
    global: { headers: { Authorization: `Bearer ${ctx.getToken()}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export default defineTool({
  name: "update_display_name",
  title: "Update display name",
  description: "Update the signed-in user's display name on their K Cup Cafe profile.",
  inputSchema: {
    display_name: z.string().trim().min(1).max(80).describe("New display name to set."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  handler: async ({ display_name }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const userId = ctx.getUserId()!;
    const { data, error } = await supabase
      .from("profiles")
      .upsert({ user_id: userId, display_name }, { onConflict: "user_id" })
      .select("display_name")
      .maybeSingle();
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return {
      content: [{ type: "text", text: `Display name updated to "${data?.display_name ?? display_name}".` }],
      structuredContent: { display_name: data?.display_name ?? display_name },
    };
  },
});