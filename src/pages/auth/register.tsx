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
import { FormContainer } from "@/layouts/form-container/app-form-container"
import GuestGuard from "@/guards/guest-guard"
import { Link, useNavigate } from "react-router-dom"
import { useAxios } from "@/hooks/use-axios"
import useToast from "@/hooks/use-toast"

const formSchema = z.object({
    email: z.string().min(1, { message: "El campo es requerido" }).email({ message: "Invalid email" }),
    firstName: z.string().min(1, { message: "El campo es requerido" }),
    lastName: z.string().min(1, { message: "El campo es requerido" }),
    password: z.string().min(1, { message: "El campo es requerido" }),
    confirmPassword: z.string().min(1, { message: "El campo es requerido" })
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

export function Register() {
    const navigate = useNavigate();
    const axios = useAxios();
    const toast = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await axios.post("/users/register", values);
            await navigate("/login", { replace: true });

            toast.showToast("¡Registro exitoso!", `¡Bienvenido, ${values.firstName}! Ahora estás listo para disfrutar de todas nuestras funciones.`);
        } catch (error: unknown) {
            toast.showErrorToast(error);
        }
    }

    return (
        <GuestGuard>
            <FormContainer>
                <div className="text-3xl font-bold text-center text-gray-800">¡Regístrate ahora!</div>
                <div className="text-sm text-center text-gray-600 mb-5">Crea tu cuenta y empieza a disfrutar de la app.</div>
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
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre  <FormRequiredSymbol /></FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Apellido  <FormRequiredSymbol /></FormLabel>
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
                                    <FormLabel>Contraseña  <FormRequiredSymbol /></FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirmacion de contraseña  <FormRequiredSymbol /></FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div>
                            <Button type="submit" className="w-full mt-4">Registrarme</Button>
                        </div>
                    </form>
                </Form>
                <div className="mt-6">
                    <div className="text-sm text-center text-gray-500">
                        ¿Ya tienes una cuenta?
                        <Link to="/login" className="text-blue-500"> Acceder</Link>
                    </div>
                </div>
            </FormContainer>
        </GuestGuard>
    )
}
