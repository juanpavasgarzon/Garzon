import { ColumnDef } from "@tanstack/react-table"
import DataTable from "@/components/ui/data-table"
import { useMemo } from "react"
import { Badge } from "@/components/ui/badge"
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

interface Measurement {
    id: string;
    name: string;
    symbol: string;
    createdAt: string;
}

const measurements: Measurement[] = [
    {
        id: '123e4567-e89b-12d3-a456-426614174000',
        name: 'Metro',
        symbol: 'm',
        createdAt: '2023-01-01T00:00:00Z',
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174001',
        name: 'Kilogramo',
        symbol: 'kg',
        createdAt: '2023-01-02T00:00:00Z',
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174002',
        name: 'Segundo',
        symbol: 's',
        createdAt: '2023-01-03T00:00:00Z',
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174003',
        name: 'Ampere',
        symbol: 'A',
        createdAt: '2023-01-04T00:00:00Z',
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174004',
        name: 'Kelvin',
        symbol: 'K',
        createdAt: '2023-01-05T00:00:00Z',
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174005',
        name: 'Mol',
        symbol: 'mol',
        createdAt: '2023-01-06T00:00:00Z',
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174006',
        name: 'Candela',
        symbol: 'cd',
        createdAt: '2023-01-07T00:00:00Z',
    },
];

export default function MeasurementList() {
    const columns = useMemo(() => [
        {
            header: "ID",
            accessorKey: "id",
        },
        {
            header: "Nombre",
            accessorKey: "name",
        },
        {
            header: "Símbolo",
            accessorKey: "symbol",
            cell: ({ row }) => {
                const value = row.getValue<string>("symbol");
                return <Badge>{value.toUpperCase()}</Badge>
            }
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
                const payment = row.original;

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
                                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                                    <div className="w-full flex items-center justify-between">
                                        <span>Copiar ID</span>
                                        <Copy className="ml-2 h-4 w-4" />
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
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
    ] as ColumnDef<Measurement>[], []);

    return (
        <Page title="Unidades de medida">
            <DataTable
                title="Unidades de medidas"
                data={measurements}
                columns={columns}
            />
        </Page>
    )
}