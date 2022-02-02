import { NgModule } from '@angular/core';
import { AliviaServicesRoutingModule } from './alivia-services-routing.module';
import { AliviaServicesComponent } from './components/alivia-services/alivia-services.component';
import { MutualModule } from 'src/app/mutual.module';

@NgModule({
  declarations: [
    AliviaServicesComponent
  ],
  imports: [
    MutualModule,
    AliviaServicesRoutingModule
  ]
})
export class AliviaServicesModule { }
