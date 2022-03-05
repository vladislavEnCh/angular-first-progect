import { RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: 'login', component: LoginPageComponent }]),
  ],
  exports: [[RouterModule]],
  providers: [],
  bootstrap: [],
})
export class LoginPageModule {}
