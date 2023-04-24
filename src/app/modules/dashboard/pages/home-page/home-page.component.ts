import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCardModel } from '@core/models/userCard.model';
import { CardService } from 'src/app/services/card/card.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  showError:boolean = false;
  cards: any;
  constructor(
    private _userService: UserService,
    private _cardService: CardService,
    private _router:Router
  ) {}
  modal = {
    title: 'Error al obtener las cartillas',
    text: 'Respuesta del servidor incorrecta o no hay cartillas registradas',
  };
  ngOnInit() {
    this.setCards();
  }

  async setCards() {
    const response: any = await this._userService.getCardsUser();
    if (response?.errors) {
    } else {
      this.cards = response?.cards;
    }
    this.showError = true;
  }

  setUserCard(userCard: UserCardModel) {
    this._cardService.setUserCard(userCard);
    this._router.navigate(['/', 'home', 'card']);
  }
}
