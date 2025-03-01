import { House, ShoppingCart, Store, User, Wallet } from "lucide-react";

export const sidebarLinks = [
  {
    id: 1,
    link: "/home",
    icon: <House />,
    name: "Home",
  },
  {
    id: 2,
    link: "/vendor",
    icon: <Store />,
    name: "Vendor",
  },
  {
    id: 3,
    link: "/order",
    icon: <ShoppingCart />,
    name: "Order",
  },
  {
    id: 4,
    link: "/wallet",
    icon: <Wallet />,
    name: "Wallet",
  },
  {
    id: 5,
    link: "/profile",
    icon: <User />,
    name: "Profile",
  },
];
