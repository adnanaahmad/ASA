import { NgModule } from '@angular/core';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './components/department/department.component';
import {SharedModule} from "../../../shared/shared.module";
import { AddDepartmentDialogComponent } from './components/add-department-dialog/add-department-dialog.component';

@NgModule({
  declarations: [
    DepartmentComponent,
    AddDepartmentDialogComponent
  ],
  imports: [
    SharedModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
