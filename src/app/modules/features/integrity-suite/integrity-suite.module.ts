import { NgModule } from '@angular/core';
import { IntegritySuiteRoutingModule } from './integrity-suite-routing.module';
import { IntegritySuiteComponent } from './components/integrity-suite/integrity-suite.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    IntegritySuiteComponent
  ],
  imports: [
    SharedModule,
    IntegritySuiteRoutingModule
  ]
})
export class IntegritySuiteModule { }
