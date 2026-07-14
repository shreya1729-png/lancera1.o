export interface Client {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  revenue: string;
}

export const clients: Client[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechNova",
    email: "sarah@technova.com",
    phone: "+91 9876543210",
    revenue: "₹48,500",
  },
  {
    id: 2,
    name: "Alex Carter",
    company: "Pixel Agency",
    email: "alex@pixelagency.com",
    phone: "+91 9988776655",
    revenue: "₹32,000",
  },
  {
    id: 3,
    name: "Emily Brown",
    company: "Creative Labs",
    email: "emily@creativelabs.com",
    phone: "+91 9123456789",
    revenue: "₹19,200",
  },
];