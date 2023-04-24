import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertClass } from '@core/customClass/Alert.Class';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private _httpClient: HttpClient,
    private _tokenService: TokenService
  ) {}
  public checkTokenSession() {
    let session = this._tokenService.checkToken(environment.tokenName);
    if (session) this._tokenService.deleteToken();
  }
  /**Función que nos retorna la promesa de validar el token */
  public async sendLogIn(email: string, password: string, alert: AlertClass) {
    alert.getStatus().default = alert.getStatus().serverWait;
    try {
      const response = await this.sendCredentials(email, password).toPromise();
      const { msg, token } = response;
      if (token) {
        alert.getStatus().default = alert.getStatus().success;
        alert.getStatus().success.title = msg;
        this._tokenService.setToken(token);
        return { ok: true };
      } else {
        alert.getStatus().default = alert.getStatus().failure;
        alert.getStatus().failure.title = 'Respuesta del servidor incorrecta';
      }
    } catch (error: any) {
      alert.getStatus().default = alert.getStatus().failure;
      const { status } = error;

      if (status === 0 || status === 500) {
        alert.getStatus().default = alert.getStatus().serverError;
      } else if (status === 401) {
        const { msg } = error.error;
        alert.getStatus().failure.title = msg;
      } else if (status === 422) {
        const { msg } = error.error;
        const { email, password } = msg;
        return { ok: false, errors: { email, password } };
      } else {
        const { msg } = error.error;
        alert.getStatus().failure.title = msg;
      }
    }
    return { ok: false };
  }
  /**Nos permite verificar si existe el usuario, en caso de existir se pone el tokken_session */
  private sendCredentials(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this._httpClient.post(`${environment.url}/auth/logIn`, body);
  }
}
