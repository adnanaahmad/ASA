import { NgModule } from '@angular/core';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './components/department/department.component';
import { MutualModule } from 'src/app/mutual.module';

@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    MutualModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
