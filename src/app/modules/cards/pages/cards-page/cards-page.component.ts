import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCardModel } from '@core/models/userCard.model';
import { CardService } from 'src/app/services/card/card.service';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.css'],
})
export class CardsPageComponent {
  userCard?: UserCardModel;
  selectValue: string = '';
  option: Array<any> = [];
  optionsAll: Array<any> = [
    {
      value: 'CART_NNY',
      text: 'Cartilla Nacional de Salud de niñas y niños (de 0 a 9 años)',
      restrictions: {
        age: {
          min: 0,
        },
      },
    },
    {
      value: 'CART_ADL',
      text: 'Cartilla Nacional de Salud del Adolescente (de 10 a 19 años)',
      restrictions: {
        age: {
          min: 10,
        },
      },
    },
    {
      value: 'CART_MUJ',
      text: 'Cartilla Nacional de Salud de la Mujer (de 20 a 59 años)',
      restrictions: {
        age: {
          min: 20,
        },
        gender: 'M',
      },
    },
    {
      value: 'CART_HOM',
      text: 'Cartilla Nacional de Salud del Hombre (de 20 a 59 años)',
      restrictions: {
        age: {
          min: 20,
        },
        gender: 'H',
      },
    },
    {
      value: 'CART_AMY',
      text: 'Cartilla Nacional de Salud del Adulto Mayor (de 60 años o más)',
      restrictions: {
        age: {
          min: 60,
        },
      },
    },
  ];
  constructor(private router:Router ,private _cardService: CardService) {}
  ngOnInit() {
    this.userCard = this._cardService.getUserCard();
    if (this.userCard) {
      const currentYear: number = new Date().getFullYear();
      const { user } = this.userCard;
      const { curp } = user;
      const genderUser: string = curp.charAt(10);
      const { birthDay } = user;
      const { year } = birthDay;
      this.optionsAll.forEach((option) => {
        let flag = true;
        const { restrictions } = option;
        if (restrictions) {
          const { age, gender } = restrictions;
          if (age) {
            const userAge = currentYear - year;
            const { min } = age;
            if (flag && min) {
              flag = userAge >= min;
            }
          }
          if (flag && gender) {
            flag = genderUser == gender;
          }
        }
        if (flag) {
          this.option.push(option);
        }
      });
    }else{
      // this.router.navigate(['/', 'home', 'user']);
    }
  }

  onSelectChange(event: any) {
    this.selectValue = event.target.value;
  }
}
