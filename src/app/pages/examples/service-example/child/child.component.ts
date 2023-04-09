import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';
import { ServiceOneService } from '../services/service-one.service';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
    public message!: string;

    counter$: Observable<number>;

    constructor(private mainService: MainService) {
        this.counter$ = mainService.counter$;
    }

    get isServiceOne() {
        return this.mainService instanceof ServiceOneService;
    }

    onSubmitClick() {
        this.mainService.log(this.message);
    }
}
