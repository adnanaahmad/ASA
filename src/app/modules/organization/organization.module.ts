import { NgModule } from '@angular/core';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './components/organization/organization.component';
import { MutualModule } from 'src/app/mutual.module';

@NgModule({
  declarations: [
    OrganizationComponent
  ],
  imports: [
    MutualModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
