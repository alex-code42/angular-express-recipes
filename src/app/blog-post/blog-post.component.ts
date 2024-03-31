import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  posts: Post[] = [];
  blogPostForm!: FormGroup;
  @Input() recipeId: string | undefined;

  constructor(private postService: PostService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPosts();
    this.initForm(); // Initialize the form when component initializes
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  initForm(): void {
    this.blogPostForm = this.formBuilder.group({
      title: ['xcvxcv', Validators.required], // Define form controls and validators
      content: ['xcvxcv', Validators.required],
      recipeId: [this.recipeId, Validators.required] // Add recipeId to the form


    });
  }

  async addNewBlogPost(title: string, content: string, recipeId: string): Promise<void> {
    const url = 'http://localhost:3000/posts'; // Your server endpoint URL
    const data = { title, content, recipeId  }; // Data of the new blog post
    console.log("addblogpost --Data ",data)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error adding blog post');
      }

      const responseData = await response.json();
      console.log('New blog post added:', responseData);
      // Additional actions after successful addition of the blog post
    } catch (error) {
      console.error('Error adding blog post:',error );
      throw error;
    }
  }

  onSubmit(): void {
    const { title, content, recipeId } = this.blogPostForm.value;
    this.addNewBlogPost(title, content, recipeId)
      .then(() => {
        // Additional actions after successful addition of the blog post
      })
      .catch(error => {
        // Handle error
      });
  }
}
