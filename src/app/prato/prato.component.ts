import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-prato',
  imports: [],
  templateUrl: './prato.component.html',
  styleUrl: './prato.component.scss'
})
export class PratoComponent {
  prato = input<string>('Prato do dia');
  pratoMudou = output<string>();

  mudarPrato() {
    this.pratoMudou.emit(this.prato());
  }
}
