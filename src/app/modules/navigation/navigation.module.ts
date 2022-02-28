import { NgModule } from '@angular/core';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import {SharedModule} from "../../shared/shared.module";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';


@NgModule({
  declarations: [
    NavigationComponent,
    ToolbarComponent,
    SideNavComponent
  ],
  imports: [
    SharedModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
