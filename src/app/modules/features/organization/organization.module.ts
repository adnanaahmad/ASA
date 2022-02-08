import { NgModule } from '@angular/core';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './components/organization/organization.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { ProductAccessComponent } from './components/product-access/product-access.component';
import { HierarchyComponent } from './components/hierarchy/hierarchy.component';
import {SharedModule} from "../../../shared/shared.module";
import { PoliciesComponent } from './components/policies/policies.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

@NgModule({
  declarations: [
    OrganizationComponent,
    BasicInfoComponent,
    ProductAccessComponent,
    HierarchyComponent,
    PoliciesComponent,
    UserManagementComponent
  ],
    imports: [
      SharedModule,
      OrganizationRoutingModule,
    ]
})
export class OrganizationModule { }
