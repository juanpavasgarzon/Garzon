import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PATH_DASHBOARD } from "@/router/app-paths";
import { BarChart as BarChartIcon, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Bar,
    BarChart,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const barChartData = [
    { name: "Ene", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 2000 },
    { name: "Abr", revenue: 2780 },
    { name: "May", revenue: 1890 },
    { name: "Jun", revenue: 2390 },
    { name: "Jul", revenue: 2190 },
    { name: "Ago", revenue: 5390 },
    { name: "Sep", revenue: 4390 },
    { name: "Oct", revenue: 3490 },
    { name: "Nov", revenue: 2290 },
    { name: "Dic", revenue: 1330 },
];

const lineChartData = [
    { name: "Ene", users: 400 },
    { name: "Feb", users: 300 },
    { name: "Mar", users: 200 },
    { name: "Abr", users: 278 },
    { name: "May", users: 189 },
    { name: "Jun", users: 239 },
    { name: "Jul", users: 219 },
    { name: "Ago", users: 539 },
    { name: "Sep", users: 439 },
    { name: "Oct", users: 349 },
    { name: "Nov", users: 229 },
    { name: "Dic", users: 133 },
];

export default function Analythics() {
    return (
        <div>
            <Breadcrumb className="mt-10 mb-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to={PATH_DASHBOARD.general.app}>General</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to={PATH_DASHBOARD.general.analythics}>Analíticas</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Separator />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
                <Card className="p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Ingresos
                        </h2>
                        <BarChartIcon className="h-6 w-6 text-blue-500" />
                    </div>
                    <p className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
                        $23,450
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comparado con el mes pasado
                    </p>
                </Card>

                <Card className="p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Nuevos Usuarios
                        </h2>
                        <Users className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
                        1,234
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comparado con el mes pasado
                    </p>
                </Card>

                <Card className="p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Rendimiento
                        </h2>
                        <TrendingUp className="h-6 w-6 text-red-500" />
                    </div>
                    <p className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
                        98.7%
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comparado con el año pasado
                    </p>
                </Card>

                <Card className="p-6 border border-gray-200 dark:border-gray-700 flex flex-col justify-between">
                    <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        Enlaces rápidos
                    </h2>
                    <div className="mt-4 space-y-2">
                        <Button variant="outline" size="sm" className="w-full">
                            Ver Reportes
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                            Gestionar Usuarios
                        </Button>
                    </div>
                </Card>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-5">
                <div className="rounded-lg border bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-900">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Ingresos por Mes</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={barChartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="revenue" fill="#4f46e5" radius={[10, 10, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-900">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Crecimiento de Usuarios</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={lineChartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={2} dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
