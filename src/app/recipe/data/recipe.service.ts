import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  readonly http = inject(HttpClient);
  readonly apiBaseUrl = environment.apiBaseUrl;

  public getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/api/v1/recipes`);
  }
}
