import { Component, OnInit } from '@angular/core';
import { Recipe } from '../blog-recipe/recipe.model';
import { RecipeService } from '../blog-recipe/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();

  }
  recipeId: string | undefined = '123'; // Example recipe ID


  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }
  // onDeleteRecipe(postId: string): void {
  //   this.recipeService.deleteRecipe(postId).subscribe(() => {
  //     // Update the list of recipes after deletion
  //     this.getRecipes();
  //   });
  // }
}
