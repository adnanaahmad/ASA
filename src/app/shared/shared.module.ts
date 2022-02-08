import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {SharedRoutingModule} from "./shared-routing.module";
import { TableComponent } from './components/table/table.component';
import {MutualModule} from "../mutual.module";

@NgModule({
  declarations: [
    PageNotFoundComponent,
    TableComponent
  ],
  exports: [
    TableComponent
  ],
  imports: [
    SharedRoutingModule,
    MutualModule
  ]
})
export class SharedModule { }
