import { NgModule } from '@angular/core';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './components/organization/organization.component';
import { MutualModule } from 'src/app/mutual.module';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';

@NgModule({
  declarations: [
    OrganizationComponent,
    BasicInfoComponent
  ],
  imports: [
    MutualModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
