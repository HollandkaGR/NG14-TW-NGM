import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchComponent } from '@app/pages/examples/fetch/fetch.component';
import { MainComponent } from '@app/pages/examples/main/main.component';
import { ServiceExampleComponent } from '@app/pages/examples/service-example/service-example.component';
import { WelcomeComponent } from '@app/pages/examples/welcome/welcome.component';
import { SandboxRoute, convertChildRoutes } from '@core/util/routHandler';

export const exampleRoutes: SandboxRoute[] = [
    {
        routeObject: {
            path: '',
            component: WelcomeComponent,
            data: {
                activeOnExact: { exact: true },
            },
        },
        displayName: '',
        inNav: false,
    },
    {
        routeObject: {
            path: 'services',
            component: ServiceExampleComponent,
        },
        displayName: 'Services',
        inNav: true,
    },
    {
        routeObject: {
            path: 'http',
            component: FetchComponent,
        },
        displayName: 'HTTP',
        inNav: true,
    },
];

const exampleMainRoute: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [...convertChildRoutes(exampleRoutes)],
    },
];

@NgModule({
    imports: [RouterModule.forChild(exampleMainRoute)],
    exports: [RouterModule],
})
export class ExamplesRoutingModule {}
