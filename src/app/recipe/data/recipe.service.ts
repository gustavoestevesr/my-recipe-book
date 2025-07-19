import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  readonly http = inject(HttpClient);

  readonly apiBaseUrl = environment.apiBaseUrl;

  public getRecipes(): Observable<Object> {
    return this.http.get(`${this.apiBaseUrl}/api/v1/recipes`);
  }
}
