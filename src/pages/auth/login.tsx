import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormRequiredSymbol,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useAuth } from "@/hooks/use-auth"
import { Link } from "react-router-dom"
import { PATH_AUTH } from "@/router/app-paths"
import * as React from "react"
import { Helmet } from "react-helmet"

const formSchema = z.object({
    email: z.string().min(1, { message: "El campo es requerido" }).email({ message: "Invalid email" }),
    password: z.string().min(1, { message: "El campo es requerido" }),
})

export default function Login() {
    const { login } = useAuth();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await login(values.email, values.password);
    }

    const title = import.meta.env.VITE_APP_NAME as string;

    return (
        <React.Fragment>
            <Helmet>
                <title>
                    {title}
                </title>
            </Helmet>
            <div className="flex flex-col items-center justify-center h-full min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-xl">
                    <div className="text-3xl font-bold text-center text-gray-800">¡Bienvenido!</div>
                    <div className="text-sm text-center text-gray-600 mb-5">Accede a tu cuenta y empieza a disfrutar de la app.</div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Correo electronico <FormRequiredSymbol /></FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contraseña <FormRequiredSymbol /></FormLabel>
                                        <FormControl>
                                            <Input  {...field} type="password" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div>
                                <Button type="submit" className="w-full mt-4">Acceder</Button>
                            </div>
                        </form>
                    </Form>
                    <div className="mt-6">
                        <div className="text-sm text-center text-gray-500">
                            ¿Aún no tienes una cuenta?
                            <Link to={PATH_AUTH.register} state={{ email: form.getValues().email }} className="text-blue-500"> Registrarme</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
