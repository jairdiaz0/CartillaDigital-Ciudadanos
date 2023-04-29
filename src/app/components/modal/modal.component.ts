import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() id?:string;
  @Input() modal?:any;
}
