import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import { GuestGuard } from "@/guards/guest-guard";
import { AuthGuard } from "@/guards/auth-guard";
import { AppSidebar } from "@/layouts/dashboard/sidebar/app-sidebar";
import { loadable } from "@/router/loadable";
import { PATH_AUTH, PATH_DASHBOARD, PATH_PAGE } from "@/router/app-paths";

export function AppRouter() {
    return useRoutes([
        {
            path: 'auth',
            children: [
                { element: <Navigate to={PATH_AUTH.login} replace />, index: true },
                {
                    path: 'login',
                    element: (
                        <GuestGuard>
                            <Login />
                        </GuestGuard>
                    ),
                },
                {
                    path: 'register',
                    element: (
                        <GuestGuard>
                            <Register />
                        </GuestGuard>
                    ),
                },
            ],
        },
        {
            path: 'dashboard',
            element: (
                <AuthGuard>
                    <AppSidebar />
                </AuthGuard>
            ),
            children: [
                { element: <Navigate to={PATH_DASHBOARD.general.app} replace />, index: true },
                { path: 'app', element: <Home />, index: true },
                { path: 'analythics', element: <Analythics /> }
            ],
        },
        {
            path: '/',
            element: <Navigate to={PATH_AUTH.login} replace />,
        },
        {
            path: '*',
            children: [
                { path: '404', element: <NotFound /> },
                { path: '*', element: <Navigate to={PATH_PAGE.page404} replace /> },
            ],
        },
        { path: '*', element: <Navigate to={PATH_PAGE.page404} replace /> },
    ])
}

// AUTH
const Login = loadable(lazy(() => import('@/pages/auth/login')));
const Register = loadable(lazy(() => import('@/pages/auth/register')));

// DASHBOARDS
const Home = loadable(lazy(() => import('@/pages/dashboard/general/home')));
const Analythics = loadable(lazy(() => import('@/pages/dashboard/general/analythics')));

// ERRORS
const NotFound = loadable(lazy(() => import('@/pages/errors/404')));