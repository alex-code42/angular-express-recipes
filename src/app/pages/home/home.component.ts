import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showRecipeForm: boolean = false;
  buttonText: string = 'Create Recipe'; // Initial button text
  buttonColor: string = 'btn-success'; // Initial button color



  showBlogRecipe: boolean = false;

  toggleBlogRecipe(): void {
    // Toggle the value of showBlogRecipe
    this.showBlogRecipe = !this.showBlogRecipe;
  }
}
