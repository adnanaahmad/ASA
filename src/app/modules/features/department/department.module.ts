import { NgModule } from '@angular/core';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './components/department/department.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    SharedModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
