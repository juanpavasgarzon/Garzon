import { Navigate, useRoutes } from "react-router-dom";
import { GuestGuard } from "@/guards/guest-guard";
import { AuthGuard } from "@/guards/auth-guard";
import { AppSidebar } from "@/layouts/dashboard/sidebar/app-sidebar";
import { PATH_AUTH, PATH_DASHBOARD, PATH_PAGE } from "@/router/app-paths";
import * as Pages from '@/router/imports';

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
                            <Pages.Login />
                        </GuestGuard>
                    ),
                },
                {
                    path: 'register',
                    element: (
                        <GuestGuard>
                            <Pages.Register />
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
                { path: 'app', element: <Pages.Home />, index: true },
                { path: 'analythics', element: <Pages.Analythics /> },
                {
                    path: 'inventories',
                    children: [
                        { path: 'measurements', element: <Pages.MeasurementList /> }
                    ]
                }
            ],
        },
        {
            path: '/',
            element: <Navigate to={PATH_AUTH.login} replace />,
        },
        {
            path: '*',
            children: [
                { path: '404', element: <Pages.NotFound /> },
                { path: '*', element: <Navigate to={PATH_PAGE.page404} replace /> },
            ],
        },
        { path: '*', element: <Navigate to={PATH_PAGE.page404} replace /> },
    ])
}

