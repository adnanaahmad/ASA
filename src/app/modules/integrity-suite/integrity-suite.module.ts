import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegritySuiteRoutingModule } from './integrity-suite-routing.module';
import { IntegritySuiteComponent } from './components/integrity-suite/integrity-suite.component';


@NgModule({
  declarations: [
    IntegritySuiteComponent
  ],
  imports: [
    CommonModule,
    IntegritySuiteRoutingModule
  ]
})
export class IntegritySuiteModule { }
