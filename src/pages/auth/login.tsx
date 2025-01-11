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
import { useAuth } from "@/hooks/use-auth"
import { Link } from "react-router-dom"

const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email" }),
    password: z.string().min(1, { message: "Password is required" }),
})

export default function Login() {
    const { login } = useAuth();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "garzonp2001@gmail.com",
            password: "Jf03082001",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await login(values.email, values.password);
    }

    return (
        <FormContainer>
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
                    <Link to="/register" className="text-blue-500"> Registrarme</Link>
                </div>
            </div>
        </FormContainer>
    )
}
