import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SessionGuard } from '@core/guards/session/session.guard';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports:[
    CommonModule,
    RouterModule
  ]
})
export class NavBarComponent {
  options = [
    {
      text: 'Mi cuenta',
      class: ['nav-item', 'text-center', 'rounded', 'bg-dark', 'me-lg-2', 'mb-2', 'mb-lg-0', 'mt-3', 'mt-lg-0'],
      router: ['/', 'home', 'user', 'dashboard']
    },
    {
      text: 'Agregar Cartilla',
      class: ['nav-item', 'text-center', 'rounded', 'bg-dark', 'me-lg-2', 'mb-2', 'mb-lg-0'],
      router: ['/', 'home', 'user', 'addCard']
    },
    {
      text: 'Cerrar Sesión',
      class: ['nav-item', 'text-center', 'rounded', 'bg-dark', 'me-lg-2', '', 'mb-0'],
      router: ['/', 'auth']
    }
  ]
  user = {
    firstName: 'Usuario No Encontrado',
    lastName: '',
    secondLastName: ''
  };
  constructor(private _sessionGuard: SessionGuard){ }
  ngOnInit(){
    this.user = this._sessionGuard.user;
  }
}
