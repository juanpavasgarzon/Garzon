import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DataTable from "@/components/ui/data-table"

interface Payment {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    },
]


const columns: ColumnDef<Payment>[] = [
    {
        id: "status",
        accessorKey: "status",
        header: "Status",
    },
    {
        id: "email",
        accessorKey: "email",
        enableMultiSort: true,
        header: "Email",
    },
    {
        id: "amount",
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            return new Intl.NumberFormat("es-ES", { style: "currency", currency: "COP" }).format(amount);
        },
    },
    {
        id: "actions",
        header: 'Actions',
        enableColumnFilter: false,
        meta: {
            asChild: true
        },
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="link">
                            <span>Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export default function MeasurementList() {
    return <DataTable
        title="Unidades de medidas"
        data={payments}
        columns={columns}
    />
}