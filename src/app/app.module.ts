import { AuthInterseptor } from './page/login-page/interseptor/interseptor';
import { AuthService } from './page/login-page/auth.service';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducer } from './reducers';
import { metaReducers } from './reducers';
import { LoginPageModule } from './page/login-page/login-page.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const INTERSEPTOR_PROVIRER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterseptor,
  multi: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    StoreModule.forRoot(reducer, {
      metaReducers,
    }),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [AuthService, INTERSEPTOR_PROVIRER],
  bootstrap: [AppComponent],
})
export class AppModule {}
