import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliviaServicesComponent } from './components/alivia-services/alivia-services.component';

const routes: Routes = [{ path: '', component: AliviaServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AliviaServicesRoutingModule { }
