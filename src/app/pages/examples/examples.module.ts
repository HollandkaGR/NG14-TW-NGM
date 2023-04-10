import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';
import { ExamplesRoutingModule } from '@app/pages/examples/examples-routing.module';
import { CaseService } from '@app/pages/examples/service-example/services/case.service';
import { FetchComponent } from './fetch/fetch.component';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [MainComponent, FetchComponent],
    imports: [CommonModule, ExamplesRoutingModule, MaterialModule],
    exports: [RouterModule],
    providers: [
        CaseService,
        // , ServiceOneService, ServiceTwoService
    ],
})
export class ExamplesModule {}
