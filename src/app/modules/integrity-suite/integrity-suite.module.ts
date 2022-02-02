import { NgModule } from '@angular/core';
import { IntegritySuiteRoutingModule } from './integrity-suite-routing.module';
import { IntegritySuiteComponent } from './components/integrity-suite/integrity-suite.component';
import { MutualModule } from 'src/app/mutual.module';

@NgModule({
  declarations: [
    IntegritySuiteComponent
  ],
  imports: [
    MutualModule,
    IntegritySuiteRoutingModule
  ]
})
export class IntegritySuiteModule { }
