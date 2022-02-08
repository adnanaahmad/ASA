import { NgModule } from '@angular/core';
import { TenantRoutingModule } from './tenant-routing.module';
import { TenantComponent } from './components/tenant/tenant.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    TenantComponent
  ],
  imports: [
    SharedModule,
    TenantRoutingModule
  ]
})
export class TenantModule { }
