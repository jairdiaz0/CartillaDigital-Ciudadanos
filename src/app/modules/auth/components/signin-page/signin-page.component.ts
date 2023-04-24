import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertClass } from '@core/customClass/Alert.Class';
import { SigninService } from '@modules/auth/services/signin/signin.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css'],
})
export class SigninPageComponent {
  formLogin: FormGroup = new FormGroup({});

  title: any;
  form: any;
  alert = new AlertClass();

  errors?: any;
  /**Método constructor */
  constructor(private router: Router, private _signinService: SigninService) {
    this.alert.getStatus().noSamePassword = this.alert.getObjectToCustom(
      'Las contraseñas no coinciden',
      ['alert', 'alert-danger']
    );
    this.alert.getStatus().noValid = this.alert.getObjectToCustom(
      'Datos del formulario no válidos',
      ['alert', 'alert-danger']
    );
    this.title = {
      text: 'Cartilla Digital de Vacunación',
      class: ['h3', 'title'],
    };
    this.form = {
      title: {
        text: 'Registro de Usuario',
        class: ['h4', 'text-center', 'mb-4'],
      },
      email: {
        class: ['col-12'],
        label: {
          class: ['text', 'title'],
          text: 'Correo Electrónico',
        },
        input: {
          class: ['form-control', 'text', 'default', 'showAsLowerCase', 'text-center'],
          type: 'email',
          formControl: 'email',
        },
      },
      firstName: {
        class: ['col-12'],
        label: {
          class: ['text', 'title'],
          text: 'Nombre (s)',
        },
        input: {
          class: ['form-control', 'text', 'default', 'showAsSmallCaps', 'text-center'],
          type: 'text',
          formControl: 'firstName',
        },
      },
      surnamePaternal: {
        class: ['col-12'],
        label: {
          class: ['text', 'title'],
          text: 'Apellido Paterno',
        },
        input: {
          class: ['form-control', 'text', 'default', 'text-center', 'showAsSmallCaps'],
          type: 'text',
          formControl: 'surnamePaternal',
        },
      },
      surnameMaternal: {
        class: ['col-12'],
        label: {
          class: ['text', 'title'],
          text: 'Apellido Materno',
        },
        input: {
          class: ['form-control', 'text', 'default', 'text-center', 'showAsSmallCaps'],
          type: 'text',
          formControl: 'surnameMaternal',
        },
      },
      password: {
        class: ['col-12'],
        label: {
          class: ['text', 'title'],
          text: 'Contraseña',
        },
        input: {
          class: ['form-control', 'text', 'default', 'text-center'],
          type: 'password',
          formControl: 'password',
          flagShow: false,
        },
      },
      passwordC: {
        class: ['col-12'],
        label: {
          class: ['text', 'title'],
          text: 'Contraseña',
        },
        input: {
          class: ['form-control', 'text', 'default', 'text-center'],
          type: 'password',
          formControl: 'passwordC',
          flagShow: false,
        },
        button: {
          title: 'Mostrar Contraseña',
          class: ['btn'],
        },
      },
      button: {
        text: 'Registrarse',
        class: ['btn', 'btn-dark', 'mb-3', 'title'],
      },
      logIn: {
        text: '¿Ya tienes una cuenta?',
        class: ['mb-2', 'text'],
        button: {
          text: 'Iniciar Sesión',
          class: ['btn', 'btn-outline-danger', 'title'],
          router: ['/', 'auth'],
        },
      },
    };
  }
  /**Método que se ejecuta al iniciar el componente */
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(50),
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
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      passwordC: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  /**Función que envia los datos para ingresar */
  async sendSignIn() {
    if (this.formLogin.valid) {
      this.alert.getStatus().flagShow = true;
      const {
        email,
        password,
        passwordC,
        firstName,
        surnamePaternal,
        surnameMaternal,
      } = this.formLogin.value;
      if (password === passwordC) {
        const response = await this._signinService.newUser(
          email,
          password,
          firstName,
          surnamePaternal,
          surnameMaternal,
          this.alert
        );
        const { ok } = response;
        if (ok) {
          this.alert.getStatus().default = this.alert.getStatus().success;
          this.router.navigate(['/', 'auth']);
        } else {
          const { errors } = response;
          this.errors = errors;
          this.alert.getStatus().default = this.alert.getStatus().failure;
        }
      } else {
        this.alert.getStatus().default = this.alert.getStatus().noSamePassword;
      }
    } else {
      this.alert.getStatus().default = this.alert.getStatus().noValid;
    }
  }
}
