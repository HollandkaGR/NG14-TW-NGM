import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '@core/component/not-found/not-found.component';
import { ClickDebounceDirective } from '@core/directives/click-debounce.directive';
import { NavComponent } from 'src/app/core/component/nav/nav.component';
import { ThemeSwitcherComponent } from 'src/app/core/component/theme-switcher/theme-switcher.component';
import { EnvPipe } from 'src/app/core/pipe/env.pipe';
import { MaterialModule } from 'src/app/material/material.module';

const CORE_COMPONENTS_TO_EXPORT = [NavComponent, NotFoundComponent, ClickDebounceDirective, EnvPipe];

@NgModule({
    declarations: [ThemeSwitcherComponent, ...CORE_COMPONENTS_TO_EXPORT],
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [...CORE_COMPONENTS_TO_EXPORT],
})
export class CoreModule {}
