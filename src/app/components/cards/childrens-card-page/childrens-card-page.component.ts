import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@components/modal/modal.component';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  standalone: true,
  selector: 'app-childrens-card-page',
  templateUrl: './childrens-card-page.component.html',
  styleUrls: ['./childrens-card-page.component.css'],
  imports: [CommonModule, ModalComponent, QRCodeModule],
})
export class ChildrensCardPageComponent {
  @Input() userCard?: any;
  CART_NNY: any = {};
  vaccineSelected: any;
  modalVaccineInfo: any;
  modalVaccineDosis: any;

  modalQR: string = '';
  private token?: any;
  constructor(private _cookieService: CookieService, private router: Router) {}

  ngOnInit() {
    this.getInfoCard();
  }

  updateUserCard() {
    this.router.navigate(['/home', 'user']);
  }

  getInfoCard() {
    const { user } = this.userCard;
    const { cards } = user;
    if (cards) {
      const CART_NNY = cards['CART_NNY'];
      if (CART_NNY) {
        this.CART_NNY = CART_NNY;
      }
    }
    const token = this._cookieService.get(environment.tokenName);
    if (token) {
      this.token = token;
    }
  }

  applyVaccine(vaccineName: string) {
    if (this.token) {
      const data = {
        user: {
          token: this.token,
          curp: this.userCard.user.curp,
        },
        vaccine: {
          name: vaccineName,
        },
        cardType: {
          nameType: 'CART_NNY',
        },
      };
      console.log(data);
      this.modalQR = JSON.stringify(data);
    }
  }
  seleccionar(vaccine: any) {
    this.vaccineSelected = vaccine;
  }
  info(title: string, body: string) {
    this.modalVaccineInfo = {
      title,
      body,
    };
  }
  dosis(title: string, body: string) {
    this.modalVaccineDosis = {
      title,
      body,
    };
  }
  vaccineSelectedGet() {
    return {
      title: this.vaccineSelected.title,
      body: `Fecha: ${this.vaccineSelected.fecha}\nLote:  ${this.vaccineSelected.lote}\nSede:  ${this.vaccineSelected.sede}"`,
    };
  }
}
