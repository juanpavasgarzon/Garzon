import { path } from "@/lib/utils";

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

export const PATH_PAGE = {
    page404: '/404',
};

export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, '/login'),
    register: path(ROOTS_AUTH, '/register'),
};

export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    general: {
        app: path(ROOTS_DASHBOARD, '/app'),
        analythics: path(ROOTS_DASHBOARD, '/analythics'),
        tasks: path(ROOTS_DASHBOARD, '/tasks'),
    },
    inventories: {
        app: path(ROOTS_DASHBOARD, '/app'),
        analythics: path(ROOTS_DASHBOARD, '/analythics'),
        tasks: path(ROOTS_DASHBOARD, '/tasks'),
    },
    relationShips: {
        app: path(ROOTS_DASHBOARD, '/app'),
        analythics: path(ROOTS_DASHBOARD, '/analythics'),
        tasks: path(ROOTS_DASHBOARD, '/tasks'),
    },
};