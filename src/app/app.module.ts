import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageComponent } from './page/login-page/login-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducer } from './reducers';
import { metaReducers } from './reducers';
import { LoginPageModule } from './page/login-page/login-page.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DragDropModule,
    CdkAccordionModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducer, {
      metaReducers
    }),
   
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    LoginPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
