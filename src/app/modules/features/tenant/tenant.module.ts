import { NgModule } from '@angular/core';
import { TenantRoutingModule } from './tenant-routing.module';
import { TenantComponent } from './components/tenant/tenant.component';
import {SharedModule} from "../../../shared/shared.module";
import { AddTenantDialogComponent } from './components/add-tenant-dialog/add-tenant-dialog.component';
import { BasicInfoTenantComponent } from './components/basic-info-tenant/basic-info-tenant.component';

@NgModule({
  declarations: [
    TenantComponent,
    AddTenantDialogComponent,
    BasicInfoTenantComponent
  ],
  imports: [
    SharedModule,
    TenantRoutingModule
  ]
})
export class TenantModule { }
