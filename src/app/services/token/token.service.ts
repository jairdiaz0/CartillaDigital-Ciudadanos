import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private _cookieService: CookieService) {}

  /**Función que nos permite agregar el token de sesión */
  public setToken(token: string) {
    return this._cookieService.set( environment.tokenName, token, undefined, '/' );
  }
  /**Función que nos permite obtener el token de sesión */
  public getToken() {
    return this._cookieService.get(environment.tokenName);
  }
  /**Función que nos permite eliminar el token de sesión */
  public deleteToken() {
    this._cookieService.delete(environment.tokenName, '/');
  }
  /**Función que nos permite checar el token de sesión */
  public checkToken(tokenName: string) {
    return this._cookieService.check(tokenName);
  }
}
