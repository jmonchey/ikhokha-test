import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'ik-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  posts$ = this.blogPostService.posts$;
  postsLoading$ = this.blogPostService.postsLoading$;

  constructor(private blogPostService: BlogPostService) { }

  loadMorePosts(): void {
    this.blogPostService.loadPosts();
  }
}
