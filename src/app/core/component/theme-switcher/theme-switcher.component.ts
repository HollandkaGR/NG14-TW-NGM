import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable, map } from 'rxjs';
import { ThemeService } from 'src/app/core/service/theme.service';

@Component({
    selector: 'app-theme-switcher',
    templateUrl: './theme-switcher.component.html',
    styleUrls: ['./theme-switcher.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
    public isDarkMode$: Observable<boolean>;

    constructor(private theme: ThemeService) {
        this.isDarkMode$ = this.theme.isDarkMode$.pipe(map((isDarkMode) => isDarkMode == 'dark'));
    }

    toggleDarkMode($event: MatSlideToggleChange) {
        this.theme.toggleDarkMode();
    }
}
