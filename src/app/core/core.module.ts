import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '@core/routes/app-routing.module';
import { NavComponent } from 'src/app/core/component/nav/nav.component';
import { ThemeSwitcherComponent } from 'src/app/core/component/theme-switcher/theme-switcher.component';
import { EnvPipe } from 'src/app/core/pipe/env.pipe';
import { MaterialModule } from 'src/app/material/material.module';

const CORE_COMPONENTS_TO_EXPORT = [NavComponent];

@NgModule({
    declarations: [ThemeSwitcherComponent, ...CORE_COMPONENTS_TO_EXPORT, EnvPipe],
    imports: [CommonModule, MaterialModule, AppRoutingModule],
    exports: [...CORE_COMPONENTS_TO_EXPORT],
})
export class CoreModule {}
