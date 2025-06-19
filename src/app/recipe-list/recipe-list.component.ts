import { Component } from '@angular/core';
import { PratoComponent } from "../prato/prato.component";

@Component({
  selector: 'app-recipe-list',
  imports: [PratoComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  pratoFavorito = 'macarrão';

  capturarPrato(prato: string) {
    this.pratoFavorito = prato;
  }
}
