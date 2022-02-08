import { NgModule } from '@angular/core';
import { AliviaServicesRoutingModule } from './alivia-services-routing.module';
import { AliviaServicesComponent } from './components/alivia-services/alivia-services.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    AliviaServicesComponent
  ],
  imports: [
    SharedModule,
    AliviaServicesRoutingModule
  ]
})
export class AliviaServicesModule { }
