import { NgModule } from '@angular/core';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './components/organization/organization.component';
import { MutualModule } from 'src/app/mutual.module';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { ProductAccessComponent } from './components/product-access/product-access.component';
import { HierarchyComponent } from './components/hierarchy/hierarchy.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    OrganizationComponent,
    BasicInfoComponent,
    ProductAccessComponent,
    HierarchyComponent
  ],
    imports: [
        MutualModule,
        OrganizationRoutingModule,
        SharedModule
    ]
})
export class OrganizationModule { }
