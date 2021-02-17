import { Component, Input } from '@angular/core';
import { BlogPostSummary } from 'src/app/models/blog-post-summary';

@Component({
  selector: 'ik-blog-post-summary',
  templateUrl: './blog-post-summary.component.html',
  styleUrls: ['./blog-post-summary.component.scss']
})
export class BlogPostSummaryComponent {
  @Input() post: BlogPostSummary;

  constructor() { }
}
