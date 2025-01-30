import {
  Page,
} from "@/components/ui/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

const pendingData = [
  { id: 1, title: "Completa tu perfil" },
  { id: 2, title: "Sube documentos" },
  { id: 3, title: "Configura tus preferencias" },
];

export default function Home() {
  const { user } = useAuth();

  return (
    <Page title="Inicio">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
              ¡Bienvenido de nuevo 👋 {user?.firstName}!
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
              Es genial tenerte aquí. ¡Revisa tus pendientes y explora nuevas
              oportunidades hoy!
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button size="sm">Ver Panel</Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                Tus Estadísticas
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                Un resumen rápido de tu progreso reciente.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 space-y-4">
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tareas completadas:</span>
                  <span className="font-bold text-gray-800 dark:text-white">45</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Pendientes:</span>
                  <span className="font-bold text-gray-800 dark:text-white">
                    {pendingData.length}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Última sesión:</span>
                  <span className="font-bold text-gray-800 dark:text-white">
                    Hace 3 días
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                Datos Pendientes
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                Completa los siguientes pasos para optimizar tu experiencia.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 space-y-2">
                {pendingData && pendingData.length > 0 ? (
                  pendingData.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span>{item.title}</span>
                      <Button variant="outline">
                        Completar
                      </Button>
                    </li>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ¡Todo está completo! 🎉
                  </p>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Page>
  );
}
