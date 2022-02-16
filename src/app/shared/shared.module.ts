import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TableComponent } from './components/table/table.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./modules/material.module";
import {BasicInfoComponent} from "./components/basic-info/basic-info.component";
import {ProductAccessComponent} from "./components/product-access/product-access.component";
import {HierarchyComponent} from "./components/hierarchy/hierarchy.component";
import {PoliciesComponent} from "./components/policies/policies.component";
import { TenantUserComponent } from './components/tenant-user/tenant-user.component';
import { OrganizationUserComponent } from './components/organization-user/organization-user.component';
import { BasicUserComponent } from './components/basic-user/basic-user.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    TableComponent,
    BasicInfoComponent,
    ProductAccessComponent,
    HierarchyComponent,
    PoliciesComponent,
    TenantUserComponent,
    OrganizationUserComponent,
    BasicUserComponent,
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableComponent,
    BasicInfoComponent,
    ProductAccessComponent,
    HierarchyComponent,
    PoliciesComponent,
    TenantUserComponent,
    OrganizationUserComponent,
    BasicUserComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
  ]
})
export class SharedModule { }
