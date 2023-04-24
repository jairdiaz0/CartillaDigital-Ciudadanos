import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class InputFormComponent {
  @Input() form:FormGroup = new FormGroup({});
  @Input() component?:any;
}
