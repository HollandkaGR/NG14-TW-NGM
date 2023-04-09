import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/pages/home/home.component';
import { SandboxRoute, convertMainRoutes } from '@core/util/routHandler';

export enum MainRoute {
    WELCOME,
    EXAMPLES,
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

const routes: Routes = [
    {
        path: '',
        children: [...convertMainRoutes(mainRoutes)],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
