import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TableComponent } from './components/table/table.component';
import {MutualModule} from "../mutual.module";

@NgModule({
  declarations: [
    PageNotFoundComponent,
    TableComponent
  ],
  exports: [
    TableComponent,
    MutualModule
  ],
  imports: [
    MutualModule
  ]
})
export class SharedModule { }
