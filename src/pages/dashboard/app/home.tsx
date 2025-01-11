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
import { PieChart, Pie, AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Link } from "react-router-dom";

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

export default function Home() {
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
              <Link to={PATH_DASHBOARD.general.app}>Otras Analíticas</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Separator />
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
        {/* Pie Chart */}
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

        {/* Area Chart */}
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
    </div>
  );
}
