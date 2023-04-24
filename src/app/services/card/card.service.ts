import { Injectable } from '@angular/core';
import { UserCardModel } from '@core/models/userCard.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private userCard?: UserCardModel;
  constructor() {}

  public setUserCard(userCard: UserCardModel) {
    this.userCard = userCard;
  }

  public getUserCard(): UserCardModel | undefined {
    return this.userCard;
  }
}
