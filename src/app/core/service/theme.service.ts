import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

type ThemeMode = 'dark' | 'light';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private themeMode$: BehaviorSubject<ThemeMode> = new BehaviorSubject<ThemeMode>('dark');
    public isDarkMode$;

    private purpleSkin = false;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.isDarkMode$ = this.themeMode$.asObservable().pipe(
            tap((mode) => {
                if (mode == 'light') this.document.body.classList.remove('dark');
                else this.document.body.classList.add('dark');
            })
        );
    }

    toggleDarkMode() {
        this.themeMode$.getValue() == 'light' ? this.themeMode$.next('dark') : this.themeMode$.next('light');
    }

    togglePurpleSkin() {
        if (this.purpleSkin) {
            this.document.body.classList.add('skin-purple');
        } else {
            this.document.body.classList.remove('skin-purple');
        }
    }
}
