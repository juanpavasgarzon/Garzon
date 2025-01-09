import { AppSidebar } from "@/layouts/sidebar/app-sidebar";
import { Login } from "@/pages/auth/login";
import { Register } from "@/pages/auth/register";
import { Navigate, Route, Routes } from "react-router-dom";
import { GuestWrap } from "@/wraps/guest-wrap";
import { AuthWrap } from "@/wraps/auth-wrap";
import { HomeCharts } from "@/pages/charts/home-charts";
import { NotFound } from "@/pages/errors/404";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<GuestWrap Component={Login} />} />
            <Route path="/register" element={<GuestWrap Component={Register} />} />

            <Route path="/dashboard" element={<AuthWrap Component={AppSidebar} />}>
                <Route index element={<HomeCharts />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
