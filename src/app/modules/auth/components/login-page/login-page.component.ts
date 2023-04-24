import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertClass } from '@core/customClass/Alert.Class';
import { LoginService } from '@modules/auth/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';

declare const bootstrap: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  formLogin: FormGroup = new FormGroup({});

  title: any;
  form: any;
  alert = new AlertClass();

  errors?: any;

  /**Método constructor */
  constructor(
    private _logInService: LoginService,
    private router: Router,
    private _userService: UserService
  ) {
    this._logInService.checkTokenSession();
    this.title = {
      text: 'Cartilla Digital de Vacunación',
      class: ['h3', 'title'],
    };
    this.form = {
      title: {
        text: 'Iniciar Sesión',
        class: ['h4', 'text-center', 'mb-4'],
      },
      email: {
        class: ['col-12'],
        label: {
          class: ['text', 'title'],
          text: 'Correo Electrónico',
        },
        input: {
          class: ['form-control', 'text', 'default', 'text-center', 'showAsLowerCase'],
          type: 'email',
          formControl: 'email',
        },
        toast: {
          id: 'toast-email',
          title: 'Error',
          text: '',
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
        toast: {
          id: 'toast-password',
          title: 'Error',
          text: '',
        },
      },
      button: {
        text: 'Iniciar Sesión',
        class: ['btn', 'btn-outline-dark', 'mb-3', 'title'],
      },
      forgotPassword: {
        text: '¿Olvidaste tu contraseña?',
        class: ['text-muted', 'd-block', 'cursor'],
      },
      signIn: {
        text: '¿No tienes una cuenta?',
        class: ['mb-2', 'text-muted', 'h6'],
        button: {
          text: 'Registrarse',
          class: ['btn', 'btn-outline-danger', 'title'],
          router: ['/', 'auth', 'signIn'],
        },
      },
    };
    this.alert.getStatus().noValid = this.alert.getObjectToCustom(
      'Formulario no válido',
      ['alert', 'alert-danger']
    );
  }
  /**Método que se ejecuta al iniciar el componente */
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+\.?$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ]),
    });
  }
  /**Función que envia los datos para ingresar */
  async sendLogin() {
    this.alert.getStatus().flagShow = true;
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;
      const response: any = await this._logInService.sendLogIn(
        email,
        password,
        this.alert
      );
      const { ok } = response;
      if (!ok) {
        const { errors } = response;
        this.errors = errors;
      } else {
        this.router.navigate(['/', 'home']);
      }
    } else {
      this.alert.getStatus().default = this.alert.getStatus().noValid;
    }
  }
}
