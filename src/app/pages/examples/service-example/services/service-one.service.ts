import { Injectable } from '@angular/core';
import { CaseService } from './case.service';
import { MainService } from './main.service';

@Injectable()
export class ServiceOneService extends MainService {
    get serviceName() {
        return 'Service one';
    }

    constructor(caseService: CaseService) {
        console.log('ServiceOne initialize');
        super(caseService);
    }

    ngOnDestroy(): void {
        console.log('ServiceOne destroyed');
    }
}
