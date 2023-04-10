import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/pages/home/home.component';
import { NotFoundComponent } from '@core/component/not-found/not-found.component';
import { SandboxRoute, convertMainRoutes, defaultRoute } from '@core/util/routHandler';

export enum MainRoute {
    WELCOME,
    EXAMPLES,
    NOT_FOUND,
}

export const mainRoutes: Map<MainRoute, SandboxRoute> = new Map([
    [
        MainRoute.WELCOME,
        {
            routeObject: {
                path: '',
                component: HomeComponent,
                data: {
                    activeOnExact: { exact: true },
                },
            },
            displayName: '',
            icon: 'home',
            inNav: false,
        },
    ],
    [
        MainRoute.EXAMPLES,
        {
            routeObject: {
                path: 'examples',
                loadChildren: () => import('@app/pages/examples/examples.module').then((m) => m.ExamplesModule),
            },
            displayName: 'Examples',
            icon: 'apps',
            inNav: true,
        },
    ],
]);

const NOT_FOUND: SandboxRoute = {
    routeObject: {
        path: 'not-found',
        component: NotFoundComponent,
    },
    displayName: '404',
    inNav: false,
};

const routes: Routes = [
    {
        path: '',
        children: [...convertMainRoutes(mainRoutes), NOT_FOUND.routeObject],
    },
    defaultRoute(NOT_FOUND),
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes
            // { preloadingStrategy: PreloadAllModules }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
