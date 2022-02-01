import { NgModule } from '@angular/core';
import { NavigationRoutingModule } from './navigation-routing.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FixedNavComponent } from './components/fixed-nav/fixed-nav.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MutualModule } from 'src/app/mutual.module';


@NgModule({
  declarations: [
    SideNavComponent,
    FixedNavComponent,
    NavigationComponent
  ],
  imports: [
    MutualModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
