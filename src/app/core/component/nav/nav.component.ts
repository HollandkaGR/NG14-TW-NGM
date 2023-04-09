import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mainRoutes } from '@core/routes/app-routing.module';
import { SandboxRoute } from '@core/util/routHandler';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
    routes: SandboxRoute[];

    constructor(public router: Router) {
        this.routes = Array.from(mainRoutes.values()).filter((route) => route.inNav);
    }

    ngOnInit(): void {}
}
