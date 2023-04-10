import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Directive({
    selector: '[clickDebounce]',
})
export class ClickDebounceDirective {
    @Input() debounceTime = 150;
    @Output() debounceClick = new EventEmitter();

    private clicks = new Subject<MouseEvent>();
    private _destroy$ = new Subject<void>();

    constructor() {}

    ngOnInit() {
        this.clicks
            .pipe(takeUntil(this._destroy$), debounceTime(this.debounceTime))
            .subscribe((e) => this.debounceClick.emit(e));
    }

    ngOnDestroy() {
        this._destroy$.next();
    }

    @HostListener('click', ['$event'])
    clickEvent(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
}
