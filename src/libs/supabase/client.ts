import { createClient } from "@supabase/supabase-js";
import { envs } from "../../configs/env/env";

export const supabase = createClient(
  envs.SUPABASE_URL,
  envs.SUPABASE_SERVICE_ROLE
);
