import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exampleRoutes } from '@app/pages/examples/examples-routing.module';
import { SandboxRoute } from '@core/util/routHandler';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass'],
    animations: [
        trigger('insertTrigger', [
            transition(':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: '*' }))]),
        ]),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
    routes: SandboxRoute[];

    constructor(public router: Router) {
        this.routes = Array.from(exampleRoutes.values()).filter((route) => route.inNav);
    }

    ngOnInit(): void {}
}
