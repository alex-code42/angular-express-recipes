import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NavigationComponent } from './navigation/navigation.component';

import { FormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { BlogRecipeComponent } from './blog-recipe/blog-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component'; // Import ReactiveFormsModule
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostListComponent,
    BlogPostComponent,
    BlogRecipeComponent,
    RecipeListComponent,
    HomeComponent,
    AboutComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
