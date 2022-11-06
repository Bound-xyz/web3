export const envs: { [key in string]: string } = {
  SUPABASE_URL: process.env.SUPABASE_URL || "",
  SUPABASE_SERVICE_ROLE: process.env.SUPABASE_SERVICE_ROLE || "",
  BOUND_WALLET_ADMIN_PRIVATE_KEY: process.env.ADMIN_PRIVATE_KEY || "",
};
