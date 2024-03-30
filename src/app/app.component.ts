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



  toggleRecipeForm() {
    this.showRecipeForm = !this.showRecipeForm;
    this.buttonText = this.showRecipeForm ? 'Cancel' : 'Create Recipe'; // Toggle button text
    this.buttonColor = this.showRecipeForm ? 'btn-danger' : 'btn-success'; // Toggle button color

  }
}
