import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    HomePageComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavBarComponent
  ]
})
export class HomeModule { }
