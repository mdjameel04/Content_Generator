import { WalletCards } from "lucide-react";
import { FileClock } from "lucide-react";
import { Settings } from "lucide-react";
import { Home } from "lucide-react";
import { LayoutTemplate, SlidersHorizontal, BookOpen, MessageSquare } from "lucide-react";

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
        path: "/dashboard/settings"
    },
]


 export const features = [
    {
      icon: <LayoutTemplate className="w-6 h-6 text-white" />,
      title: "25+ templates",
      desc: "Responsive, and mobile-first project on the web",
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6 text-white" />,
      title: "Customizable",
      desc: "Components are easily customized and extendable",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Free to Use",
      desc: "Every component and plugin is well documented",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "24/7 Support",
      desc: "Contact us 24 hours a day, 7 days a week",
    },
  ];