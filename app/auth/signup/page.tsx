"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signUp } from "@/lib/auth";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    console.log("Email:", email);
    console.log("Password:", password);

    const result = await signUp(email, password);

    console.log("Supabase Response:", result);

    setLoading(false);

    if (result.error) {
      alert(result.error.message);
      return;
    }

    alert("Account created successfully!");

    router.push("/auth/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <h1 className="text-3xl font-bold">
          Create your account
        </h1>

        <p className="mt-2 text-slate-500">
          Join Lancera
        </p>

        <input
          className="mt-8 w-full rounded-xl border p-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mt-4 w-full rounded-xl border p-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className="mt-6 w-full"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Account"}
        </Button>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-blue-600"
          >
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}