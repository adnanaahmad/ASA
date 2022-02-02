import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegritySuiteComponent } from './components/integrity-suite/integrity-suite.component';

const routes: Routes = [{ path: '', component: IntegritySuiteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegritySuiteRoutingModule { }
