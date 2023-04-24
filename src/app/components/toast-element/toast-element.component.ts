import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-toast-element',
  templateUrl: './toast-element.component.html',
  styleUrls: ['./toast-element.component.css'],
})
export class ToastElementComponent {
  @Input() toast?:any;
}
