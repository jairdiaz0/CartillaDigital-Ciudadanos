import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddCardPageComponent } from './pages/add-card-page/add-card-page.component';
import { InputFormComponent } from '@components/input-form/input-form.component';
import { AlertComponent } from '@components/alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, AddCardPageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    InputFormComponent,
    AlertComponent,
  ],
})
export class DashboardModule {}
