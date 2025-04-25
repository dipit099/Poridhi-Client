import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wshtmxmoduselixpjbzp.supabase.co"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzaHRteG1vZHVzZWxpeHBqYnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTM1MDMsImV4cCI6MjA1NzI4OTUwM30.s29G2Ontg4ZH1_ArqAT-i2fsFt89wTpwDx2QT55j3ss"; // Replace with your Supabase API key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
