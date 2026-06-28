import {
  LayoutDashboard,
  Users,
  Truck,
  Glasses,
  Eye,
  ShoppingCart,
  ChartColumn,
  Settings,
} from "lucide-react";

export const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Supplier",
    url: "/suppliers",
    icon: Truck,
  },
  {
    title: "Customer",
    url: "/customers",
    icon: Users,
  },
  {
    title: "Produk",
    url: "/products",
    icon: Glasses,
  },
  {
    title: "Pemeriksaan",
    url: "/prescriptions",
    icon: Eye,
  },
  {
    title: "Penjualan",
    url: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Laporan",
    url: "/reports",
    icon: ChartColumn,
  },
  {
    title: "Pengaturan",
    url: "/settings",
    icon: Settings,
  },
];