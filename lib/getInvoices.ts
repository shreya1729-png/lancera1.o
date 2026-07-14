import { supabase } from "./supabase";

export async function getInvoices() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data } = await supabase
    .from("invoices")
    .select(`
      *,
      clients(name,company)
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return data ?? [];
}