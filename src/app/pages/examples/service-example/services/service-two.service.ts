import { Injectable, OnDestroy } from '@angular/core';
import { CaseService } from './case.service';
import { MainService } from './main.service';

@Injectable()
export class ServiceTwoService extends MainService implements OnDestroy {
    get serviceName() {
        return 'Service two';
    }

    constructor(caseService: CaseService) {
        console.log('ServiceTwo initialize');
        super(caseService);
    }

    ngOnDestroy(): void {
        console.log('ServiceTwo destroyed');
    }
}
