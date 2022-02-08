import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TableComponent } from './components/table/table.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./modules/material.module";

@NgModule({
  declarations: [
    PageNotFoundComponent,
    TableComponent
  ],
  exports: [
    TableComponent,
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
