import { ColumnDef } from "@tanstack/react-table"
import DataTable from "@/components/ui/data-table"
import { useMemo } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
    Copy,
    Edit,
    Link,
    MoreHorizontal,
    Trash
} from "lucide-react"
import { Page } from "@/components/ui/page"

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    createdAt: string;
}

const products: Product[] = [
    {
        id: "1",
        code: "P001",
        name: "Product 1",
        description: "Description for product 1",
        price: 10.0,
        stockQuantity: 100,
        createdAt: "2023-01-01T00:00:00Z",
    },
    {
        id: "2",
        code: "P002",
        name: "Product 2",
        description: "Description for product 2",
        price: 20.0,
        stockQuantity: 200,
        createdAt: "2023-01-02T00:00:00Z",
    },
    {
        id: "3",
        code: "P003",
        name: "Product 3",
        description: "Description for product 3",
        price: 30.0,
        stockQuantity: 300,
        createdAt: "2023-01-03T00:00:00Z",
    },
    {
        id: "4",
        code: "P004",
        name: "Product 4",
        description: "Description for product 4",
        price: 40.0,
        stockQuantity: 400,
        createdAt: "2023-01-04T00:00:00Z",
    },
    {
        id: "5",
        code: "P005",
        name: "Product 5",
        description: "Description for product 5",
        price: 50.0,
        stockQuantity: 500,
        createdAt: "2023-01-05T00:00:00Z",
    },
    {
        id: "6",
        code: "P006",
        name: "Product 6",
        description: "Description for product 6",
        price: 60.0,
        stockQuantity: 600,
        createdAt: "2023-01-06T00:00:00Z",
    },
    {
        id: "7",
        code: "P007",
        name: "Product 7",
        description: "Description for product 7",
        price: 70.0,
        stockQuantity: 700,
        createdAt: "2023-01-07T00:00:00Z",
    },
    {
        id: "8",
        code: "P008",
        name: "Product 8",
        description: "Description for product 8",
        price: 80.0,
        stockQuantity: 800,
        createdAt: "2023-01-08T00:00:00Z",
    },
    {
        id: "9",
        code: "P009",
        name: "Product 9",
        description: "Description for product 9",
        price: 90.0,
        stockQuantity: 900,
        createdAt: "2023-01-09T00:00:00Z",
    },
    {
        id: "10",
        code: "P010",
        name: "Product 10",
        description: "Description for product 10",
        price: 100.0,
        stockQuantity: 1000,
        createdAt: "2023-01-10T00:00:00Z",
    },
];

export default function MeasurementList() {
    const columns = useMemo(() => [
        {
            header: "ID",
            accessorKey: "id",
        },
        {
            header: "Código",
            accessorKey: "code",
        },
        {
            header: "Nombre",
            accessorKey: "name",
        },
        {
            header: "Descripción",
            accessorKey: "description",
        },
        {
            header: "Precio",
            accessorKey: "price",
            cell: ({ row }) => {
                const value = row.getValue<number>("price");
                return `$${value.toFixed(2)}`;
            },
        },
        {
            header: "Cantidad en Stock",
            accessorKey: "stockQuantity",
        },
        {
            header: "Fecha de Creación",
            accessorKey: "createdAt",
            enableColumnFilter: false,
            cell: ({ row }) => {
                const value = row.getValue<string>("createdAt");
                const date = new Date(value);
                return date.toLocaleDateString();
            },
        },
        {
            id: "actions",
            header: 'Acciones',
            enableColumnFilter: false,
            meta: {
                asChild: true
            },
            cell: ({ row }) => {
                const product = row.original;

                return (
                    <div className="flex items-center justify-start space-1">
                        <Button size="icon" variant="outline" className="mr-1">
                            <Edit />
                        </Button>
                        <Button size="icon" variant="outline" className="mr-1">
                            <Trash />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="outline">
                                    <MoreHorizontal />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.id)}>
                                    <div className="w-full flex items-center justify-between">
                                        <span>Copiar ID</span>
                                        <Copy className="ml-2 h-4 w-4" />
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.id)}>
                                    <div className="w-full flex items-center justify-between">
                                        <span>Copiar vinculo</span>
                                        <Link className="ml-2 h-4 w-4" />
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )
            },
        },
    ] as ColumnDef<Product>[], []);

    return (
        <Page title="Productos">
            <DataTable
                title="Productos"
                data={products}
                columns={columns}
            />
        </Page>
    )
}