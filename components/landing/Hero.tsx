import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-24">

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">

            <Sparkles className="h-4 w-4 text-blue-600" />

            <span className="text-sm font-medium">
              Built for Freelancers
            </span>

          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 lg:text-7xl leading-tight">

            The operating
            <br />

            system every
            <br />

            freelancer
            <br />

            wishes they had.

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">

            Manage clients, create invoices,
            track work, automate reminders,
            and get paid faster—
            all from one beautiful workspace.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button size="lg">

              Start Free

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>

            <Button
              variant="outline"
              size="lg"
            >

              <PlayCircle className="mr-2 h-5 w-5" />

              Watch Demo

            </Button>

          </div>

          <div className="mt-10 flex items-center gap-4">

            <div className="flex -space-x-3">

              <div className="h-10 w-10 rounded-full bg-blue-500 border-2 border-white" />

              <div className="h-10 w-10 rounded-full bg-pink-500 border-2 border-white" />

              <div className="h-10 w-10 rounded-full bg-green-500 border-2 border-white" />

            </div>

            <p className="text-sm text-slate-500">

              Trusted by early freelancers building
              their independent business.

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="rounded-3xl border bg-white p-8 shadow-2xl">

            <div className="flex items-center justify-between">

              <h2 className="text-lg font-semibold">
                Dashboard
              </h2>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">

                Live

              </span>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm text-slate-500">

                  Revenue

                </p>

                <h3 className="mt-2 text-3xl font-bold">

                  ₹48,500

                </h3>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm text-slate-500">

                  Clients

                </p>

                <h3 className="mt-2 text-3xl font-bold">

                  12

                </h3>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm text-slate-500">

                  Paid

                </p>

                <h3 className="mt-2 text-3xl font-bold text-green-600">

                  ₹31k

                </h3>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm text-slate-500">

                  Pending

                </p>

                <h3 className="mt-2 text-3xl font-bold text-orange-500">

                  ₹17k

                </h3>

              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">

              <p className="text-sm opacity-70">

                AI Reminder

              </p>

              <p className="mt-3">

                Hi Sarah,

                Just a reminder that Invoice #102
                is due today.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}