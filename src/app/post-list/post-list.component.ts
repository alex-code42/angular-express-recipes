import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: Post[] = [];


  ////////Test
  @Input() recipeId: string | undefined;
  
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();

  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => {
        // Filter posts based on recipeId
        if (this.recipeId) {
          this.posts = posts.filter(post => post.recipeId === this.recipeId);
        } else {
          this.posts = posts; // If recipeId is undefined, assign all posts
        }
      });
  }
  onDeletePost(postId: string): void {
    this.postService.deletePost(postId).subscribe(() => {
      // Update the list of posts after deletion
      this.getPosts();
    });
  }
}

