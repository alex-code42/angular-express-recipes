import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Recipe } from './recipe.model'; // Import the Recipe class
import { RecipeBookService } from './recipe-book.service'; // Import the RecipeBook service




@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  recipe: Recipe = new Recipe('', '', [{ name: '', amount: '' }]);
  submittedRecipe: Recipe | null = null; 
 

  constructor(private recipeBookService: RecipeBookService) {} // Inject the RecipeBook service


  someMethod() {
    const message = 'This is a message from the service.';
    console.log(message);
  }

  addIngredient() {
    this.recipe.ingredients.push({ name: '', amount: '' });
  }

  submitForm() {
    // Add the submitted recipe to the recipe book
    this.submittedRecipe = this.recipe;
    this.recipeBookService.addRecipe(this.recipe);


    // Log the submitted recipe
    console.log('Submitted Recipe:', this.recipe);

    // Clear the form fields
    this.recipe = new Recipe('','', [{ name: '', amount: '' }]);
  }
}
