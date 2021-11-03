import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FixedNavComponent } from './components/fixed-nav/fixed-nav.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    SideNavComponent,
    FixedNavComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
