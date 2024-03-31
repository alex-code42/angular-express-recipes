import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showRecipeForm: boolean = false;
  buttonText: string = 'Create Recipe'; // Initial button text
  buttonColor: string = 'btn-success'; // Initial button color



  showBlogRecipe: boolean = false;

  toggleBlogRecipe(): void {
    // Toggle the value of showBlogRecipe
    this.showBlogRecipe = !this.showBlogRecipe;
  }
}
