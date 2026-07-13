"use client";

import { useState } from "react";
import { Sparkles, Loader2, ArrowRight } from "lucide-react";

type Step =
  | "idle"
  | "reading"
  | "creating"
  | "saving"
  | "complete";

export default function AiDemo() {
  const [prompt, setPrompt] = useState(
    "Bill Sarah ₹18,000 for logo design due Friday"
  );

  const [step, setStep] = useState<Step>("idle");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (loading) return;

    setLoading(true);

    setStep("reading");
    await wait(800);

    setStep("creating");
    await wait(900);

    setStep("saving");
    await wait(900);

    setStep("complete");

    setLoading(false);
  }

  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-12 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">

            <Sparkles className="h-4 w-4 text-blue-600" />

            <span className="text-sm font-semibold text-blue-700">
              AI Demo
            </span>

          </div>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">

            Tell Lancera what you did.

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">

            No complicated forms.

            Just describe your work naturally.

          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

          <label className="mb-3 block text-sm font-semibold text-slate-700">

            Ask Lancera

          </label>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="w-full resize-none rounded-2xl border border-slate-200 p-5 text-lg outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-6 flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Lancera is thinking...
              </>
            ) : (
              <>
                Let AI Handle It
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </button>

          <div className="mt-10 rounded-2xl bg-slate-100 p-6">

            <p className="mb-5 text-sm font-semibold text-slate-500 uppercase tracking-wider">

              Progress

            </p>

            <Status
              label="Reading your request"
              active={step === "reading"}
              done={
                step === "creating" ||
                step === "saving" ||
                step === "complete"
              }
            />

            <Status
              label="Creating invoice"
              active={step === "creating"}
              done={step === "saving" || step === "complete"}
            />

            <Status
              label="Saving client"
              active={step === "saving"}
              done={step === "complete"}
            />

            <Status
              label="Ready"
              active={step === "complete"}
              done={false}
            />

          </div>

        </div>

      </div>

    </section>
  );
}

function Status({
  label,
  active,
  done,
}: {
  label: string;
  active: boolean;
  done: boolean;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">

      <div
        className={`h-3 w-3 rounded-full ${
          done
            ? "bg-green-500"
            : active
            ? "bg-blue-500 animate-pulse"
            : "bg-slate-300"
        }`}
      />

      <span
        className={`${
          done || active
            ? "text-slate-900"
            : "text-slate-500"
        }`}
      >
        {label}
      </span>

    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}