import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { ServiceOneService } from '../services/service-one.service';

@Component({
    selector: 'app-parent-one',
    templateUrl: './parent-one.component.html',
    styleUrls: ['./parent-one.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: MainService, useClass: ServiceOneService }],
})
export class ParentOneComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
