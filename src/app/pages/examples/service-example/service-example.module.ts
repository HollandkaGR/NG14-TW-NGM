import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';
import { ChildComponent } from '@app/pages/examples/service-example/child/child.component';
import { ParentOneComponent } from '@app/pages/examples/service-example/parent-one/parent-one.component';
import { ParentTwoComponent } from '@app/pages/examples/service-example/parent-two/parent-two.component';
import { ServiceExampleComponent } from '@app/pages/examples/service-example/service-example.component';
import { CoreModule } from '@core/core.module';
import { StateOverviewComponent } from './state-overview/state-overview.component';

@NgModule({
    declarations: [
        ServiceExampleComponent,
        ParentOneComponent,
        ParentTwoComponent,
        ChildComponent,
        StateOverviewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        CoreModule,
        RouterModule.forChild([
            {
                path: '',
                component: ServiceExampleComponent,
            },
        ]),
    ],
    exports: [RouterModule],
    // providers: [ServiceTwoService],
})
export class ServiceExampleModule {}
