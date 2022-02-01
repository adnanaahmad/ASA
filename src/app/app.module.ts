import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./modules/auth/auth.module";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HelperService} from "./shared/services/common/helper/helper.service";
import {TokenInterceptorService} from "./shared/services/core/interceptors/token-interceptor.service";
import {SharedModule} from "./shared/shared.module";
import {AuthGuard} from "./shared/services/core/gurads/auth.guard";
import { MutualModule } from './mutual.module';

/**
 * AoT requires an exported function for factories
 * @param http
 * @constructor
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MutualModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    TranslateService,
    HelperService,
    AuthGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
