import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable()
export class CaseService {
    private childService!: MainService;

    constructor() {}

    set service(cService: MainService) {
        this.childService = cService;
    }

    increaseCounter(): void {
        if (!this.childService) return;
        this.childService.increaseCounter();
    }
}
