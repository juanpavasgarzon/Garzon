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
    },
    inventories: {
        root: path(ROOTS_DASHBOARD, '/inventories'),
        measurement: path(ROOTS_DASHBOARD, '/inventories/measurements'),
        products: path(ROOTS_DASHBOARD, '/inventories/products'),
        movements: path(ROOTS_DASHBOARD, '/inventories/movements'),
    },
    relationShips: {
        root: path(ROOTS_DASHBOARD, '/relation-ships'),
        customers: path(ROOTS_DASHBOARD, '/relation-ships/customers'),
        suppliers: path(ROOTS_DASHBOARD, '/relation-ships/suppliers'),
    },
    sales: {
        root: path(ROOTS_DASHBOARD, '/sales'),
        orders: path(ROOTS_DASHBOARD, '/sales/orders'),
        invoices: path(ROOTS_DASHBOARD, '/sales/invoices'),
    },
    scm: {
        root: path(ROOTS_DASHBOARD, '/scm'),
        orders: path(ROOTS_DASHBOARD, '/scm/orders'),
        purchases: path(ROOTS_DASHBOARD, '/scm/purchases'),
    },
    hrm: {
        root: path(ROOTS_DASHBOARD, '/hrm'),
        employees: path(ROOTS_DASHBOARD, '/hrm/employees'),
    },
    security: {
        root: path(ROOTS_DASHBOARD, '/security'),
        permissions: path(ROOTS_DASHBOARD, '/security/permissions'),
        roles: path(ROOTS_DASHBOARD, '/security/roles'),
        users: path(ROOTS_DASHBOARD, '/security/users'),
    },
};