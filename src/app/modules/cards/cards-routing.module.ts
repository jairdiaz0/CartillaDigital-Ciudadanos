import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';

const routes: Routes = [
  {
    path: '',
    component: CardsPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
