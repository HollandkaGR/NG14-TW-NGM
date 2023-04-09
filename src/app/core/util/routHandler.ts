import { Route } from '@angular/router';
import { MainRoute } from '@core/routes/app-routing.module';

export interface SandboxRoute {
    routeObject: Route;
    displayName: string;
    icon?: string;
    inNav: boolean;
}

export function convertMainRoutes(routes: Map<MainRoute, SandboxRoute>): Route[] {
    return Array.from(routes.values()).map((myRoute) => myRoute.routeObject);
}

export function convertChildRoutes(routes: SandboxRoute[]): Route[] {
    return Array.from(routes.values()).map((myRoute) => myRoute.routeObject);
}

export function getPath(route: SandboxRoute): string {
    if (route) {
        return route.routeObject.path ? route.routeObject.path : '/';
    }
    return '/';
}

export function defaultRoute(route: SandboxRoute): Route {
    return {
        path: '**',
        redirectTo: getPath(route),
    };
}

export function notFoundRedirectToRoot(): Route {
    return {
        path: '**',
        redirectTo: '/',
    };
}
