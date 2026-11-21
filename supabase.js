import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://rwexkxzznwoyxgybtzot.supabase.co";
const supabaseKey = "sb_publishable_SU13uQErWHRKffYSdV5A_Q_AMDlXUaJ";

export const supabase = createClient(supabaseUrl, supabaseKey);
