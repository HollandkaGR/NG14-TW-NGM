import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';
import { ExamplesRoutingModule } from '@app/pages/examples/examples-routing.module';
import { ServiceExampleModule } from '@app/pages/examples/service-example/service-example.module';
import { FetchComponent } from './fetch/fetch.component';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [MainComponent, FetchComponent],
    imports: [CommonModule, ExamplesRoutingModule, MaterialModule, ServiceExampleModule],
    exports: [RouterModule],
})
export class ExamplesModule {}
