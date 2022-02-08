import { NgModule } from '@angular/core';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './components/organization/organization.component';
import { MutualModule } from 'src/app/mutual.module';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { ProductAccessComponent } from './components/product-access/product-access.component';

@NgModule({
  declarations: [
    OrganizationComponent,
    BasicInfoComponent,
    ProductAccessComponent
  ],
  imports: [
    MutualModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
