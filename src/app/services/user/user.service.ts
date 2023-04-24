import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertClass } from '@core/customClass/Alert.Class';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private _httpClient: HttpClient,
    private _cookieService: CookieService
  ) {}

  public async getCardsUser() {
    try {
      const response = await this.sendPostRequest(
        '/users/getCards',
        {}
      ).toPromise();
      return response;
    } catch (err) {}
    return undefined;
  }
  public async getUserInfo() {
    const response = await this.sendPostRequest(
      '/users/getUser',
      {}
    ).toPromise();
    return response;
  }
  public async addCard(card: any, alert: AlertClass) {
    alert.getStatus().default = alert.getStatus().serverWait;
    try {
      const response = await this.sendPostRequest('/users/addNewCard', {
        card,
      }).toPromise();
      alert.getStatus().default = alert.getStatus().success;
      alert.getStatus().success.title = "Cartilla Agregada con Éxito";
      return { ok: true };
    } catch (error: any) {
      alert.getStatus().default = alert.getStatus().failure;
      console.log(error);
      const { status } = error;
      if (status === 0) {
        alert.getStatus().default = alert.getStatus().serverError;
      } else if (status === 422 || 409 || 500) {
        const { msg } = error.error;
        alert.getStatus().failure.title = msg;
      } else {
        console.error('Error desconocido: ', error);
      }
    }
    return { ok: false };
  }

  private sendPostRequest(route: string, body: any): Observable<any> {
    const token = this._cookieService.get(environment.tokenName);
    body.token = token;
    return this._httpClient.post(`${environment.url}${route}`, body);
  }
}
