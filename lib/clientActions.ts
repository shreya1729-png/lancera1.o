import { supabase } from "./supabase";

export async function createClient(client: {
  name: string;
  company: string;
  email: string;
  phone: string;
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  return await supabase.from("clients").insert([
    {
      ...client,
      user_id: user.id,
    },
  ]);
}