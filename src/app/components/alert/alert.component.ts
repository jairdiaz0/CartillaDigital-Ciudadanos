import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlertClass } from '@core/customClass/Alert.Class';

@Component({
  standalone: true,
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  imports: [CommonModule],
})
export class AlertComponent {
  @Input() alert?: AlertClass;
  @Input() container?: Array<string>;

  ngOnInit(): void {
    if (!this.alert) {
      console.error('Error al cargar el alert, cargando por defecto');
      this.alert = new AlertClass();
    }
  }
}
