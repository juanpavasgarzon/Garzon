import { PATH_DASHBOARD } from "@/router/app-paths";
import {
    ChartPie,
    Contact,
    User
} from "lucide-react";

interface NavItem {
    title: string;
    url: string;
    icon: React.ExoticComponent,
    items: Omit<NavItem, 'icon' | 'items'>[];
}

export const navConfig: NavItem[] = [
    {
        title: "General",
        url: PATH_DASHBOARD.root,
        icon: ChartPie,
        items: [
            {
                title: "Inicio",
                url: PATH_DASHBOARD.general.app,
            },
            {
                title: "Analiticas",
                url: PATH_DASHBOARD.general.analythics,
            },
        ],
    },
    {
        title: "Relaciones",
        url: PATH_DASHBOARD.root,
        icon: Contact,
        items: [
            {
                title: "Clientes",
                url: PATH_DASHBOARD.general.app,
            },
            {
                title: "Proveedores",
                url: PATH_DASHBOARD.general.analythics,
            }
        ],
    },
    {
        title: "Usuarios",
        url: PATH_DASHBOARD.root,
        icon: User,
        items: [
            {
                title: "Inicio",
                url: PATH_DASHBOARD.general.app,
            },
            {
                title: "Analiticas",
                url: PATH_DASHBOARD.general.analythics,
            },
            {
                title: "Tareas",
                url: PATH_DASHBOARD.general.tasks,
            },
        ],
    },
];