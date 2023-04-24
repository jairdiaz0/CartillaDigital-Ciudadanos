import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '@components/alert/alert.component';
import { InputFormComponent } from '@components/input-form/input-form.component';
import { ToastElementComponent } from '@components/toast-element/toast-element.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    SigninPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AlertComponent,
    InputFormComponent,
    ToastElementComponent
  ]
})
export class AuthModule { }
