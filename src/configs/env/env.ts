export const envs: { [key in string]: string } = {
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  SUPABASE_SERVICE_ROLE: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE || "",
  BOUND_WALLET_ADMIN_PRIVATE_KEY: process.env.ADMIN_PRIVATE_KEY || "",
};
