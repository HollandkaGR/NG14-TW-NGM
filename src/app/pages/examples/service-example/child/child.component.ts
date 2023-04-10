import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
    public message!: string;

    counter$: Observable<number>;

    constructor(public mainService: MainService) {
        this.counter$ = mainService.counter$;
    }

    onSubmitClick() {
        this.mainService.log(this.message);
    }
}
