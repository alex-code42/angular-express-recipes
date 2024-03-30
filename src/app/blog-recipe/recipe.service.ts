import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';
  private readonly baseUrl = 'http://localhost:3000/recipes'; // Adjust the base URL as per your server


  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }

  deleteRecipe(recipeId: string): Observable<void> {
    const url = `${this.baseUrl}/${recipeId}`;
    return this.http.delete<void>(url);
  }
}
