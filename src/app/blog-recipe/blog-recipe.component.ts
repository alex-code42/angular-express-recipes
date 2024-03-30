import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';

import { Recipe, Ingredient } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-blog-recipe',
  templateUrl: './blog-recipe.component.html',
  styleUrls: ['./blog-recipe.component.css']
})




export class BlogRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  blogRecipeForm!: FormGroup;
  

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPosts();
    this.initForm(); // Initialize the form when component initializes
  }

  getPosts(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }

  initForm(): void {
    this.blogRecipeForm = this.formBuilder.group({
      title: ['xcvxcv', Validators.required], // Define form controls and validators
      content: ['xcvxcv', Validators.required],
      img_url: ['xcvxcv', Validators.required],
      ingredients: this.formBuilder.array([]) // Initialize ingredients as a FormArray

    });
  }

  get ingredientsArray() {
    return this.blogRecipeForm.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    // Add a new FormGroup for the ingredient with default values
    this.ingredientsArray.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        amount: ['', Validators.required]
      })
    );
  }

  removeIngredient(index: number): void {
    if (this.ingredientsArray && this.ingredientsArray.length > index) {
      this.ingredientsArray.removeAt(index);
    }
  }

 

  async addNewBlogPost(title: string, content: string, img_url: string, ingredients: Ingredient[]): Promise<void> {
    const url = 'http://localhost:3000/recipes'; // Your server endpoint URL
    const data = { title, content, img_url, ingredients }; // Data of the new blog recipe
    console.log("async function",data)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error adding blog recipe');
      }

      const responseData = await response.json();
      console.log('New blog recipe added:', responseData);
      // Additional actions after successful addition of the blog recipe
    } catch (error) {
      console.error('Error adding blog recipe:',error );
      throw error;
    }
  }

  onSubmit(): void {
    if (this.blogRecipeForm.valid) {  
        const { title, content, img_url, ingredients } = this.blogRecipeForm.value;
        console.log("this are the ingredients",this.blogRecipeForm.value)
        this.addNewBlogPost(title, content, img_url, ingredients)
            .then(() => {
                // Erfolgreich hinzugefügt
            })
            .catch(error => {
                // Fehlerbehandlung
            });
    }
  }
}

