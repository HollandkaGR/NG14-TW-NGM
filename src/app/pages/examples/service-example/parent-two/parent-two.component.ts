import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { ServiceTwoService } from '../services/service-two.service';

@Component({
    selector: 'app-parent-two',
    templateUrl: './parent-two.component.html',
    styleUrls: ['./parent-two.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: MainService, useClass: ServiceTwoService }],
})
export class ParentTwoComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
