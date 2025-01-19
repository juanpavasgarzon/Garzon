import {
    Column,
    ColumnDef,
    ColumnFiltersState,
    HeaderGroup,
    RowModel,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ArrowUpDown, EyeOff, Filter, MoreVertical, RefreshCw, Settings, Trash } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

type ColumnMetaData = {
    asChild: boolean
}

interface DataTableProps<TData> {
    title: string;
    data: TData[];
    columns: ColumnDef<TData>[];
}

function DataTableTools<TData>({
    title,
    columns
}: {
    title: string,
    columns: Column<TData>[]
}) {
    return (
        <div className="flex items-center justify-between p-2">
            <div className="mx-2 opacity-70">
                {title}
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="sm">
                        <Settings />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => columns.forEach((column) => column.setFilterValue(""))}>
                        <div className="flex items-center justify-between w-full">
                            <span>
                                Refrescar filtros
                            </span>
                            <Trash className="ml-2 h-4 w-4" />
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => columns.forEach((column) => column.clearSorting())}>
                        <div className="flex items-center justify-between w-full">
                            <span>
                                Refrescar orden
                            </span>
                            <RefreshCw className="ml-2 h-4 w-4" />
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {columns
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                >
                                    {column.columnDef.header?.toString()}
                                </DropdownMenuCheckboxItem>
                            )
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

function DataTableHeader<TData>({
    headerGroups
}: {
    headerGroups: HeaderGroup<TData>[]
}) {
    return (
        <TableHeader>
            {headerGroups.map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        const meta = header.column.columnDef.meta as ColumnMetaData | undefined;

                        return !meta?.asChild ? (
                            <TableHead key={header.id}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild >
                                        <Button variant="link">
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            <div className="relative inline-block">
                                                <MoreVertical className="h-4 w-4" />
                                                {(!!header.column.getIsSorted() || header.column.getIsFiltered()) && (
                                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 bg-green-500 rounded-full -translate-y-1 translate-x-1" />
                                                )}
                                            </div>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        {header.column.getCanFilter() && (
                                            <DropdownMenuLabel>
                                                <div className="relative inline-block flex items-center">
                                                    {header.column.getIsFiltered() ? (
                                                        <Button
                                                            onClick={() => header.column.setFilterValue("")}
                                                            className="absolute h-4 w-4 top-0 right-0 inline-flex items-center justify-center translate-y-3 -translate-x-2"
                                                            variant="ghost"
                                                            size="icon"
                                                        >
                                                            <Trash />
                                                        </Button>
                                                    ) : (
                                                        <Filter className="absolute h-4 w-4 top-0 right-0 inline-flex items-center justify-center translate-y-3 -translate-x-2" />
                                                    )}
                                                    <Input
                                                        placeholder={`Buscar ${header.column.columnDef.header?.toString().toLowerCase()}...`}
                                                        value={header.column.getFilterValue() as string ?? ""}
                                                        onChange={(event) => header.column.setFilterValue(event.target.value)}
                                                        className="w-full text-sm pr-8"
                                                    />
                                                </div>
                                            </DropdownMenuLabel>
                                        )}
                                        <DropdownMenuSeparator />
                                        {header.column.getCanSort() && (
                                            <DropdownMenuItem onClick={() => header.column.toggleSorting(header.column.getIsSorted() === "asc", true)}>
                                                <div className="flex items-center justify-between w-full">
                                                    <span>
                                                        Ordenar
                                                        {!!header.column.getIsSorted() && <Badge className="mx-2 uppercase"> {header.column.getIsSorted()}</Badge>}
                                                    </span>
                                                    <ArrowUpDown className="ml-2 h-4 w-4" />
                                                </div>
                                            </DropdownMenuItem>
                                        )}
                                        {header.column.getCanHide() && (
                                            <DropdownMenuItem onClick={() => header.column.toggleVisibility(false)}>
                                                <div className="flex items-center justify-between w-full">
                                                    <span>
                                                        Ocultar
                                                    </span>
                                                    <EyeOff className="ml-2 h-4 w-4" />
                                                </div>
                                            </DropdownMenuItem>
                                        )}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableHead>
                        ) : (
                            <TableHead key={header.id}>
                                <Button variant="link">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </Button>
                            </TableHead>
                        )
                    })}
                </TableRow>
            ))}
        </TableHeader>
    )
}

function DataTableBody<TData>({
    rowModel,
    totalColumns
}: {
    rowModel: RowModel<TData>,
    totalColumns: number
}) {
    return (
        <TableBody>
            {rowModel.rows?.length ? (
                rowModel.rows.map((row) => (
                    <TableRow key={row.id} >
                        {row.getVisibleCells().map((cell) => {
                            const meta = cell.column.columnDef.meta as ColumnMetaData | undefined;

                            return !meta?.asChild ? (
                                <TableCell key={cell.id}>
                                    <div className="mx-4">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </div>
                                </TableCell>
                            ) : (
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                ))
            ) : (
                <TableRow>
                    <TableCell colSpan={totalColumns} className="h-24 text-center">
                        No results.
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
    )
}

function DataTablePagination({
    previousPage,
    disablePreviousPage,
    nextPage,
    disabledNextPage,
}: {
    previousPage: () => void
    disablePreviousPage: boolean,
    nextPage: () => void,
    disabledNextPage: boolean,
}) {
    return (
        <div className="flex items-center justify-end space-x-2 py-4">
            <Button
                variant="outline"
                size="sm"
                onClick={previousPage}
                disabled={disablePreviousPage}
            >
                Previous
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={nextPage}
                disabled={disabledNextPage}
            >
                Next
            </Button>
        </div>
    )
}

export default function DataTable<TData>({ title, columns, data }: DataTableProps<TData>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({ id: false });
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters,
        state: { sorting, columnVisibility, columnFilters },
        enableGlobalFilter: true,
        enableMultiSort: true,
    });

    return (
        <div>
            <div className="rounded-md border mt-5 bg-white">
                <DataTableTools title={title} columns={table.getAllColumns()} />
                <Separator />
                <Table>
                    <DataTableHeader
                        headerGroups={table.getHeaderGroups()}
                    />
                    <DataTableBody
                        rowModel={table.getRowModel()}
                        totalColumns={columns.length}
                    />
                </Table>
            </div>
            <DataTablePagination
                previousPage={() => table.previousPage()}
                disablePreviousPage={!table.getCanPreviousPage()}
                disabledNextPage={!table.getCanNextPage()}
                nextPage={() => table.nextPage()}
            />
        </div>
    )
}