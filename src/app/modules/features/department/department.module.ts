import { NgModule } from '@angular/core';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './components/department/department.component';
import {SharedModule} from "../../../shared/shared.module";
import { AddDepartmentDialogComponent } from './components/add-department-dialog/add-department-dialog.component';
import { BasicInfoDepartmentComponent } from './components/basic-info-department/basic-info-department.component';

@NgModule({
  declarations: [
    DepartmentComponent,
    AddDepartmentDialogComponent,
    BasicInfoDepartmentComponent,
  ],
  imports: [
    SharedModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
