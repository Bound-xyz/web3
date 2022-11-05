import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { supabase } from "src/libs/supabase/client";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY || "",
  domain: "example.com",
  callbacks: {
    login: async (address: string) => {
      const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("wallet_address", address.toLowerCase())
        .single();

      if (!user) {
        const res = await supabase
          .from("users")
          .insert({ wallet_address: address.toLowerCase() })
          .single();

        if (res.error) {
          throw new Error("Failed to create user!");
        }
      }
    },
    user: async (address: string) => {
      const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("wallet_address", address.toLowerCase())
        .single();

      return user;
    },
  },
});

export default ThirdwebAuthHandler();
