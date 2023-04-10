import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CaseService } from '@app/pages/examples/service-example/services/case.service';

@Component({
    selector: 'app-fetch',
    templateUrl: './fetch.component.html',
    styleUrls: ['./fetch.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FetchComponent implements OnInit {
    constructor(private caseService: CaseService) {}

    ngOnInit(): void {
        console.log('Current counter: ', this.caseService.currentCounter);
    }
}
