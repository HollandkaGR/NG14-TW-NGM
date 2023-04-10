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

    abstract get serviceName(): string;

    public log(message: String): void {
        console.log(this.serviceName + ' log: ', message);
    }

    increaseCounter() {
        this._counter.next(this._counter.getValue() + 1);
    }

    get counterValue() {
        return this._counter.getValue();
    }
}
