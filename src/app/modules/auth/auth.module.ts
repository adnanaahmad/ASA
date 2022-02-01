import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {TranslateModule} from "@ngx-translate/core";
import { MutualModule } from 'src/app/mutual.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MutualModule,
    AuthRoutingModule,
    TranslateModule,
  ]
})
export class AuthModule {
}
