import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddCardPageComponent } from './pages/add-card-page/add-card-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: HomePageComponent
  },
  {
    path: 'addCard',
    component: AddCardPageComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
