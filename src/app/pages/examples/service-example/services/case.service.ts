import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
    providedIn: 'root',
})
export class CaseService {
    private childService!: MainService;

    constructor() {}

    set service(cService: MainService) {
        if (!this.childService) this.childService = cService;
    }

    increaseCounter(): void {
        if (!this.childService) return;
        this.childService.increaseCounter();
    }
}
