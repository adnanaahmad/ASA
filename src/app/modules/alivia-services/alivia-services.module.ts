import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AliviaServicesRoutingModule } from './alivia-services-routing.module';
import { AliviaServicesComponent } from './components/alivia-services/alivia-services.component';

@NgModule({
  declarations: [
    AliviaServicesComponent
  ],
  imports: [
    CommonModule,
    AliviaServicesRoutingModule
  ]
})
export class AliviaServicesModule { }
