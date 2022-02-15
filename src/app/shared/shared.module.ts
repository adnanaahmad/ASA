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

@NgModule({
  declarations: [
    PageNotFoundComponent,
    TableComponent,
    BasicInfoComponent,
    ProductAccessComponent,
    HierarchyComponent,
    PoliciesComponent,
  ],
  exports: [
    TableComponent,
    BasicInfoComponent,
    ProductAccessComponent,
    HierarchyComponent,
    PoliciesComponent,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    MaterialModule,
    CommonModule,
  ]
})
export class SharedModule { }
