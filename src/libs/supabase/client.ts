import { createClient } from "@supabase/supabase-js";
import { Database } from "src/types/supabase";
import { envs } from "../../configs/env/env";

export const supabase = createClient<Database>(
  envs.SUPABASE_URL,
  envs.SUPABASE_SERVICE_ROLE
);
