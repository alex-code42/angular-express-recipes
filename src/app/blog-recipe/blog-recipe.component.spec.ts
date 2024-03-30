import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRecipeComponent } from './blog-recipe.component';

describe('BlogRecipeComponent', () => {
  let component: BlogRecipeComponent;
  let fixture: ComponentFixture<BlogRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
