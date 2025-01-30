import { PATH_DASHBOARD } from "@/router/app-paths";
import {
    Box,
    ChartPie,
    Contact,
    HandCoins,
    Lock,
    PersonStanding,
    ShoppingBasket
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
        url: PATH_DASHBOARD.inventories.root,
        icon: Box,
        items: [
            {
                title: "Unidades de medida",
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
        title: "Ventas",
        url: PATH_DASHBOARD.sales.root,
        icon: HandCoins,
        items: [
            {
                title: "Pedidos",
                url: PATH_DASHBOARD.sales.orders,
            },
            {
                title: "Facturas",
                url: PATH_DASHBOARD.sales.invoices,
            }
        ],
    },
    {
        title: "Cadena de suministro",
        url: PATH_DASHBOARD.scm.root,
        icon: ShoppingBasket,
        items: [
            {
                title: "Ordenes de compras",
                url: PATH_DASHBOARD.scm.orders,
            },
            {
                title: "Compras",
                url: PATH_DASHBOARD.scm.purchases,
            }
        ],
    },
    {
        title: "Recursos humanos",
        url: PATH_DASHBOARD.hrm.root,
        icon: PersonStanding,
        items: [
            {
                title: "Empleados",
                url: PATH_DASHBOARD.hrm.employees,
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