import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Recipe } from './recipe.model';
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
      img_url: ['xcvxcv', Validators.required]
    });
  }

  async addNewBlogPost(title: string, content: string, img_url: string): Promise<void> {
    const url = 'http://localhost:3000/recipes'; // Your server endpoint URL
    const data = { title, content, img_url }; // Data of the new blog recipe

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
    const { title, content, img_url } = this.blogRecipeForm.value;
    this.addNewBlogPost(title, content, img_url)
      .then(() => {
        // Additional actions after successful addition of the blog recipe
      })
      .catch(error => {
        // Handle error
      });
  }
}

