// recipe-book.component.ts
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-form/recipe.model';
import { RecipeBookService } from '../recipe-form/recipe-book.service'; // Import the RecipeBookService

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeBookService: RecipeBookService) {} // Inject the RecipeBookService

  ngOnInit(): void {
    // this.addHardcodedRecipe(); // Add hardcoded recipe when component initializes
    this.getRecipes(); // Call getRecipes() method when component initializes
  }

  // addHardcodedRecipe() {
  //   const hardcodedRecipe: Recipe = {
  //     name: 'Früchteteller',
  //     img_url: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     ingredients: [
  //       { name: 'Apfel', amount: '1' },
  //       { name: 'Cheese', amount: '2' },
  //       { name: 'Trauben', amount: '4' },
  //       { name: 'Wurst', amount: '1' }
  //     ]
  //   };
  //   this.recipeBookService.addRecipe(hardcodedRecipe);
  // }


  getRecipes(): void {
    this.recipeBookService.getAllRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  onDelete(index: number): void {
    this.recipeBookService.deleteRecipe(index)
      .subscribe(() => {
        this.getRecipes(); // Refresh recipes array after deletion
      });
  }
}
