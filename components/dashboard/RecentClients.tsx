const clients = [
  {
    name: "Sarah Johnson",
    company: "TechNova",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Alex Carter",
    company: "Pixel Agency",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Emily Brown",
    company: "Creative Labs",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    name: "James Wilson",
    company: "StartupX",
    avatar: "https://i.pravatar.cc/100?img=20",
  },
];

export default function RecentClients() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Recent Clients
        </h2>

      </div>

      <div className="space-y-4">

        {clients.map((client) => (

          <div
            key={client.name}
            className="flex items-center gap-4 rounded-xl border p-4 hover:bg-slate-50"
          >

            <img
              src={client.avatar}
              alt={client.name}
              className="h-12 w-12 rounded-full"
            />

            <div className="flex-1">

              <h3 className="font-semibold">
                {client.name}
              </h3>

              <p className="text-sm text-slate-500">
                {client.company}
              </p>

            </div>

            <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm">
              Open
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}