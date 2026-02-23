import { WalletCards } from "lucide-react";
import { FileClock } from "lucide-react";
import { Settings } from "lucide-react";
import { Home } from "lucide-react";

export const MenuList= [
    {
        name: "Home",
        icon: Home,
        path: "/dashboard"
    },
    {
        name: "History",
        icon: FileClock,
        path: "/dashboard/history"
    },
    {
        name: "Billing",
        icon: WalletCards,
        path: "/dashboard/billing"
    },
    {
        name: "Setting",
        icon: Settings,
        path: "/dashboard/setting"
    },
]