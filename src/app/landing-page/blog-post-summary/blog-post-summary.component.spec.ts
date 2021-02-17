import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSummaryComponent } from './blog-post-summary.component';

describe('BlogPostSummaryComponent', () => {
  let component: BlogPostSummaryComponent;
  let fixture: ComponentFixture<BlogPostSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
