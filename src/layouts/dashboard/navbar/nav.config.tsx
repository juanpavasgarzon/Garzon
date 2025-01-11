import { PATH_DASHBOARD } from "@/router/app-paths";
import {
    Box,
    ChartPie,
    Contact,
    Lock
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
        title: "Inventario",
        url: PATH_DASHBOARD.relationShips.root,
        icon: Box,
        items: [
            {
                title: "Unidades medida",
                url: PATH_DASHBOARD.inventories.measurement,
            },
            {
                title: "Productos",
                url: PATH_DASHBOARD.inventories.products,
            },
            {
                title: "Movimientos",
                url: PATH_DASHBOARD.inventories.movements,
            }
        ],
    },
    {
        title: "Relaciones",
        url: PATH_DASHBOARD.relationShips.root,
        icon: Contact,
        items: [
            {
                title: "Clientes",
                url: PATH_DASHBOARD.relationShips.customers,
            },
            {
                title: "Proveedores",
                url: PATH_DASHBOARD.relationShips.suppliers,
            }
        ],
    },
    {
        title: "Seguridad",
        url: PATH_DASHBOARD.security.root,
        icon: Lock,
        items: [
            {
                title: "Permisos",
                url: PATH_DASHBOARD.security.permissions,
            },
            {
                title: "Roles",
                url: PATH_DASHBOARD.security.roles,
            },
            {
                title: "Usuarios",
                url: PATH_DASHBOARD.security.users,
            },
        ],
    },
];