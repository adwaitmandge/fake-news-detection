import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://thgopqupzausrpvpvxgx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZ29wcXVwemF1c3JwdnB2eGd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3NTU4MzksImV4cCI6MTk5NjMzMTgzOX0.tpomRsbNHycpSr4j1iWXksjiOVqVwKG53UqS5Pii01s"
);
