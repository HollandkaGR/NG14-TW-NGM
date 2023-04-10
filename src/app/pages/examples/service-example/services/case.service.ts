import { Injectable, OnDestroy } from '@angular/core';
import { MainService } from './main.service';

@Injectable()
export class CaseService implements OnDestroy {
    private childService!: MainService;

    constructor() {
        console.log('CaseService initialize');
    }

    ngOnDestroy(): void {
        console.log('CaseService destroyed');
    }

    set service(cService: MainService) {
        if (!this.childService) this.childService = cService;
    }

    increaseCounter(): void {
        this.childService.increaseCounter();
        console.log('Increased counter: ', this.childService.counterValue);
    }

    get currentCounter() {
        return this.childService.counterValue;
    }
}
