import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CaseService } from '@app/pages/examples/service-example/services/case.service';

@Component({
    selector: 'app-service-example',
    templateUrl: './service-example.component.html',
    styleUrls: ['./service-example.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceExampleComponent implements OnInit {
    constructor(private caseService: CaseService) {}

    ngOnInit(): void {}

    increaseCounter() {
        this.caseService.increaseCounter();
    }
}
