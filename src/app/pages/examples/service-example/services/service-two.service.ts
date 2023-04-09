import { Injectable, OnDestroy } from '@angular/core';
import { CaseService } from './case.service';
import { MainService } from './main.service';

@Injectable()
export class ServiceTwoService extends MainService implements OnDestroy {
    constructor(caseService: CaseService) {
        console.log('ServiceTwo initialize');
        super(caseService);
    }

    ngOnDestroy(): void {
        console.log('ServiceTwo destroyed');
    }

    public override log(message: String): void {
        console.log('Service Two logging: ', message);
    }
}
