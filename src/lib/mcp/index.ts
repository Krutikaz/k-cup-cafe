import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import updateDisplayNameTool from "./tools/update-display-name";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "k-cup-cafe-mcp",
  title: "K Cup Cafe",
  version: "0.1.0",
  instructions:
    "Tools for K Cup Cafe. Use `get_profile` to read the signed-in user's profile and `update_display_name` to change their display name.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getProfileTool, updateDisplayNameTool],
});