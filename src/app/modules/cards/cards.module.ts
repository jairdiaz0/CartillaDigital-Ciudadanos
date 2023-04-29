import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { TeensCardPageComponent } from '@components/cards/teens-card-page/teens-card-page.component';
import { ChildrensCardPageComponent } from '@components/cards/childrens-card-page/childrens-card-page.component';
import { MansCardPageComponent } from '@components/cards/mans-card-page/mans-card-page.component';
import { OlderAdultCardPageComponent } from '@components/cards/older-adult-card-page/older-adult-card-page.component';
import { WoMansCardPageComponent } from '@components/cards/wo-mans-card-page/wo-mans-card-page/wo-mans-card-page.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    CardsPageComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    NavBarComponent,
    ChildrensCardPageComponent,
    TeensCardPageComponent,
    MansCardPageComponent,
    OlderAdultCardPageComponent,
    WoMansCardPageComponent
  ]
})
export class CardsModule { }
