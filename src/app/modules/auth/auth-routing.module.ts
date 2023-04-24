import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';

const routes: Routes = [
  {
    path: 'logIn',
    component: LoginPageComponent
  },
  {
    path: 'signIn',
    component: SigninPageComponent
  },
  {
    path: '**',
    redirectTo: 'logIn'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
