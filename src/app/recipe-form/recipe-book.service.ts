import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  private apiUrl = 'http://localhost:3000/api/recipes';

  constructor(private http: HttpClient) {}

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }
  
  deleteRecipe(index: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${index}`;
    return this.http.delete<void>(deleteUrl);
  }

  // Add methods for updating, deleting, etc.
}
