import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainService } from '@app/pages/examples/service-example/services/main.service';
import { ServiceTwoService } from '@app/pages/examples/service-example/services/service-two.service';

@Component({
    selector: 'app-state-overview',
    templateUrl: './state-overview.component.html',
    styleUrls: ['./state-overview.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: MainService, useExisting: ServiceTwoService }],
})
export class StateOverviewComponent implements OnInit {
    counter$;

    constructor(public mainService: MainService) {
        this.counter$ = this.mainService.counter$;
    }

    ngOnInit(): void {}
}
