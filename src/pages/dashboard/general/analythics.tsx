import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Page } from "@/components/ui/page";
import { BarChart as BarChartIcon, TrendingUp, Users } from "lucide-react";
import {
    Bar,
    BarChart,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Area,
    AreaChart,
    Pie,
    PieChart,
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

const pieChartData = [
    { name: "Ventas", value: 500 },
    { name: "Suscripciones", value: 300 },
    { name: "Otros", value: 200 },
];

const areaChartData = [
    { name: "Ene", expenses: 1200, savings: 800 },
    { name: "Feb", expenses: 1800, savings: 1200 },
    { name: "Mar", expenses: 1400, savings: 1000 },
    { name: "Abr", expenses: 2000, savings: 1500 },
    { name: "May", expenses: 1600, savings: 1200 },
    { name: "Jun", expenses: 1900, savings: 1300 },
    { name: "Jul", expenses: 1900, savings: 1300 },
    { name: "Ago", expenses: 1900, savings: 1300 },
    { name: "Sep", expenses: 1900, savings: 1300 },
    { name: "Oct", expenses: 1900, savings: 1300 },
    { name: "Nov", expenses: 1900, savings: 1300 },
    { name: "Dic", expenses: 1900, savings: 1300 },
];

export default function Analythics() {
    return (
        <Page title="Analíticas">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
                <Card className="p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Total Ventas
                        </h2>
                        <span className="text-blue-500 text-xl font-bold">$45,780</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Este trimestre
                    </p>
                </Card>

                <Card className="p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Suscripciones Activas
                        </h2>
                        <span className="text-green-500 text-xl font-bold">850</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        10% más que el mes pasado
                    </p>
                </Card>

                <Card className="p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Retención de Clientes
                        </h2>
                        <span className="text-red-500 text-xl font-bold">78%</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Comparado con el año pasado
                    </p>
                </Card>

                <Card className="p-6 border border-gray-200 dark:border-gray-700 flex flex-col justify-between">
                    <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        Acciones Rápidas
                    </h2>
                    <div className="mt-4 space-y-2">
                        <Button variant="outline" size="sm" className="w-full">
                            Crear Campaña
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                            Ver Facturas
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

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-5">
                <div className="rounded-lg border bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-900">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Distribución de Ingresos</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieChartData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#4f46e5"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-900">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Gastos y Ahorros</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={areaChartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="expenses" stackId="1" stroke="#ff7300" fill="#ff7300" />
                            <Area type="monotone" dataKey="savings" stackId="1" stroke="#4f46e5" fill="#4f46e5" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Page>
    );
}
