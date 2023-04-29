import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@components/modal/modal.component';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  standalone: true,
  selector: 'app-older-adult-card-page',
  templateUrl: './older-adult-card-page.component.html',
  styleUrls: ['./older-adult-card-page.component.css'],
  imports:[
    CommonModule,
    ModalComponent,
    QRCodeModule
  ]
})
export class OlderAdultCardPageComponent {
  @Input() userCard?: any;
  CART_AMY: any = {};
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
      const CART_AMY = cards['CART_AMY'];
      if (CART_AMY) {
        this.CART_AMY = CART_AMY;
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
          nameType: 'CART_AMY',
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
