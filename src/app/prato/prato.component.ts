import { Component, input } from '@angular/core';

@Component({
  selector: 'app-prato',
  imports: [],
  templateUrl: './prato.component.html',
  styleUrl: './prato.component.scss'
})
export class PratoComponent {
  prato = input.required<string>();
}
