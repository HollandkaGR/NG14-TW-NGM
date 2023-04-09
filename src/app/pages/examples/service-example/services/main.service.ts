import { Injectable } from '@angular/core';
import { CaseService } from '@app/pages/examples/service-example/services/case.service';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable()
export abstract class MainService {
    private _counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public counter$ = this._counter.asObservable().pipe(filter((count) => count > 0));

    constructor(public caseService: CaseService) {
        caseService.service = this;
    }

    public log(message: String): void {
        console.log('Log: ', message);
    }

    increaseCounter() {
        let counter: number = this._counter.getValue() !== null ? this._counter.getValue() : 0;
        counter++;
        this._counter.next(counter);
    }
}
