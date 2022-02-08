import { NgModule } from '@angular/core';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    SharedModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
