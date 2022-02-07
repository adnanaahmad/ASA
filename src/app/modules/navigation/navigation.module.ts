import { NgModule } from '@angular/core';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MutualModule } from 'src/app/mutual.module';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    MutualModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
