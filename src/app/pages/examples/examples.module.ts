import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';
import { ExamplesRoutingModule } from '@app/pages/examples/examples-routing.module';
import { FetchComponent } from './fetch/fetch.component';
import { MainComponent } from './main/main.component';
import { ServiceExampleComponent } from './service-example/service-example.component';

@NgModule({
    declarations: [MainComponent, ServiceExampleComponent, FetchComponent],
    imports: [CommonModule, ExamplesRoutingModule, MaterialModule],
    exports: [RouterModule],
})
export class ExamplesModule {}
