import { NgModule } from '@angular/core';
import { TenantRoutingModule } from './tenant-routing.module';
import { TenantComponent } from './components/tenant/tenant.component';
import { MutualModule } from 'src/app/mutual.module';

@NgModule({
  declarations: [
    TenantComponent
  ],
  imports: [
    MutualModule,
    TenantRoutingModule
  ]
})
export class TenantModule { }
