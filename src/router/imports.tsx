import { lazy } from 'react';
import { loadable } from "@/router/loadable";

// AUTH
export const Login = loadable(lazy(() => import('@/pages/auth/login')));
export const Register = loadable(lazy(() => import('@/pages/auth/register')));

// DASHBOARDS
export const Home = loadable(lazy(() => import('@/pages/dashboard/general/home')));
export const Analythics = loadable(lazy(() => import('@/pages/dashboard/general/analythics')));

// MEASUREMENTS
export const MeasurementList = loadable(lazy(() => import("@/pages/dashboard/inventory/measurement/list")));

// ERRORS
export const NotFound = loadable(lazy(() => import('@/pages/errors/404')));