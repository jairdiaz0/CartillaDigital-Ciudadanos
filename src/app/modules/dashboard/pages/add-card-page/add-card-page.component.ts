import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertClass } from '@core/customClass/Alert.Class';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-card-page',
  templateUrl: './add-card-page.component.html',
  styleUrls: ['./add-card-page.component.css'],
})
export class AddCardPageComponent {
  formNewCard: FormGroup = new FormGroup({});
  form: any;
  alert = new AlertClass();
  errors: any;

  constructor(private _userService: UserService) {
    this.form = {
      title: {
        text: 'Registro de Nueva Cartilla',
        class: ['h3', 'mt-4', 'text-center'],
      },
      CURP: {
        class: ['col-12'],
        label: {
          class: ['text', 'title', 'showAsSmallCaps'],
          text: 'CURP De La Nueva Cartilla',
        },
        input: {
          class: ['form-control', 'text-center', 'text', 'showAsUpperCase'],
          type: 'text',
          formControl: 'curp',
        },
      },
      firstName: {
        class: ['col-12'],
        label: {
          class: ['text', 'title', 'showAsSmallCaps'],
          text: 'Nombre (s)',
        },
        input: {
          class: ['form-control', 'text-center', 'text', 'showAsSmallCaps'],
          type: 'text',
          formControl: 'firstName',
        },
      },
      surnamePaternal: {
        class: ['col-12'],
        label: {
          class: ['text', 'showAsSmallCaps'],
          text: 'Apellido Paterno',
        },
        input: {
          class: ['form-control', 'text-center', 'text', 'showAsSmallCaps'],
          type: 'text',
          formControl: 'surnamePaternal',
        },
      },
      surnameMaternal: {
        class: ['col-12'],
        label: {
          class: ['text', 'showAsSmallCaps'],
          text: 'Apellido Materno',
        },
        input: {
          class: ['form-control', 'text-center', 'text', 'showAsSmallCaps'],
          type: 'text',
          formControl: 'surnameMaternal',
        },
      },
      birthDay: {
        class: ['col-12'],
        label: {
          class: ['text', 'title', 'showAsSmallCaps'],
          text: 'Fecha de Nacimiento',
        },
        input: {
          class: ['form-control', 'text-center', 'text', 'showAsUpperCase'],
          type: 'date',
          formControl: 'birthDay',
        },
      },
    };
    this.alert.getStatus().success.title = 'Alta de Cartilla Correcta';
    this.alert.getStatus().failure.title = 'Ocurrió un error inesperado';
  }
  erCURP: string =
    '[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}';
  ngOnInit() {
    this.formNewCard = new FormGroup({
      curp: new FormControl('', [
        Validators.required,
        Validators.minLength(18),
        Validators.maxLength(18),
        Validators.pattern(`(${this.erCURP})|(${this.erCURP.toLowerCase()})`),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      surnamePaternal: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      surnameMaternal: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      birthDay: new FormControl('', [Validators.required]),
    });
  }

  async sendData() {
    this.alert.getStatus().flagShow = true;
    if (this.formNewCard.valid) {
      const { curp, firstName, surnamePaternal, surnameMaternal, birthDay } =
        this.formNewCard.value;
      const date = new Date(birthDay);
      const offset = date.getTimezoneOffset() * 60 * 1000;
      const newDate = new Date(date.getTime() + offset);
      const day = newDate.getDate();
      const month = newDate.getMonth() + 1;
      const year = newDate.getFullYear();
      const card = {
        user: {
          curp: curp,
          name: {
            firstName: firstName,
            lastName: surnamePaternal,
            secondLastName: surnameMaternal,
          },
          birthDay: {
            day: day,
            month: month,
            year: year,
          },
        },
        cards: [],
      };
      const response: any = await this._userService.addCard(card, this.alert);
      const { ok } = response;
      if (ok) {
        this.formNewCard.reset();
      }
    } else {
      this.alert.getStatus().default = this.alert.getStatus().failure;
    }
  }
}
