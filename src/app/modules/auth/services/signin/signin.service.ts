import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertClass } from '@core/customClass/Alert.Class';
import { UserModel } from '@core/models/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private _httpClient: HttpClient) {}

  /**Función que nos permite enviar las credenciales para la creación de un nuevo usuario */
  public async newUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    secondLastName: string,
    alert: AlertClass
  ) {
    alert.getStatus().default = alert.getStatus().serverWait;
    const user: UserModel = {
      auth: { email, password },
      user: { firstName, lastName, secondLastName },
    };
    try {
      const response = await this.sendNewUser(user).toPromise();
      alert.getStatus().default = alert.getStatus().success;
      return response;
    } catch (error: any) {
      alert.getStatus().default = alert.getStatus().failure;
      const { status } = error;
      if (status === 0 || status === 500) {
        alert.getStatus().default = alert.getStatus().serverError;
      }
      if (status === 422) {
        const { msg } = error.error;
        const { firstName, lastName, secondLastName, email, password } = msg;
        return {
          ok: false,
          errors: { firstName, lastName, secondLastName, email, password },
        };
      } else {
        const { msg } = error.error;
        alert.getStatus().failure.title = msg;
      }
    }
    return undefined;
  }

  /**Método que nos permite enviar las credenciales a la API */
  private sendNewUser(user: UserModel): Observable<any> {
    return this._httpClient.post(`${environment.url}/auth/signIn`, user);
  }
}
