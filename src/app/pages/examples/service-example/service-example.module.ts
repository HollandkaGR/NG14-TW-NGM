import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';
import { ChildComponent } from '@app/pages/examples/service-example/child/child.component';
import { ParentOneComponent } from '@app/pages/examples/service-example/parent-one/parent-one.component';
import { ParentTwoComponent } from '@app/pages/examples/service-example/parent-two/parent-two.component';
import { ServiceExampleComponent } from '@app/pages/examples/service-example/service-example.component';
import { CaseService } from '@app/pages/examples/service-example/services/case.service';

@NgModule({
    declarations: [ServiceExampleComponent, ParentOneComponent, ParentTwoComponent, ChildComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule.forChild([
            {
                path: '',
                component: ServiceExampleComponent,
            },
        ]),
    ],
    exports: [RouterModule],
    providers: [CaseService],
})
export class ServiceExampleModule {}
