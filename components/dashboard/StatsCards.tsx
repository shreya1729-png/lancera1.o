import {
  IndianRupee,
  Users,
  FileText,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Revenue",
    value: "₹48,500",
    icon: IndianRupee,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Clients",
    value: "12",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Invoices",
    value: "34",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Growth",
    value: "+18%",
    icon: TrendingUp,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {stat.value}
                </h2>

              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
}