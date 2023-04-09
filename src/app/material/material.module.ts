import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [MatButtonModule, MatSlideToggleModule, MatIconModule, MatToolbarModule, MatIconModule];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...MATERIAL_MODULES],
    exports: [...MATERIAL_MODULES],
})
export class MaterialModule {}
