import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, first } from 'rxjs/operators';
import { BlogPostSummary } from '../models/blog-post-summary';
import { MenuService } from './menu.service';
import { posts } from './posts';


@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private postsSubject: BehaviorSubject<BlogPostSummary[]>;
  readonly posts$: Observable<BlogPostSummary[]>;
  private postsLoadingSubject: BehaviorSubject<boolean>;
  readonly postsLoading$: Observable<boolean>;

  constructor(private menuService: MenuService) {
    this.postsSubject = new BehaviorSubject<BlogPostSummary[]>([]);
    this.posts$ = this.postsSubject.asObservable();
    this.postsLoadingSubject = new BehaviorSubject<boolean>(false);
    this.postsLoading$ = this.postsLoadingSubject.asObservable();

    this.loadPosts();
  }

  private getBlogPostSummaries(count: number, lastPostId: string): Observable<BlogPostSummary[]> {
    // Would be an http call but we're mocking it for now
    let index = 0;

    if (lastPostId) {
      index = posts.findIndex(post => post.id === lastPostId) + 1;
    }

    const postSlice = posts.slice(index, index + count);

    return of(postSlice).pipe(
      delay(1000)   // Simulate fetching data from the server
    );
  }

  async loadPosts(): Promise<void> {
    const lastPostId = this.getLastPostId();
    const count = await this.getNumberOfItemsToLoad();
    this.postsLoadingSubject.next(true);

    try {
      const newPosts = await this.getBlogPostSummaries(count, lastPostId).toPromise();
      const posts = [...this.postsSubject.value, ...newPosts];
      this.postsSubject.next(posts);
    } catch(e) {
    }

    this.postsLoadingSubject.next(false);
  }

  private getLastPostId(): string {
    const currentPosts = this.postsSubject.value;
    return currentPosts.length > 0
      ? currentPosts[currentPosts.length - 1].id
      : '';
  }

  private async getNumberOfItemsToLoad(): Promise<number> {
    const isMobile = await this.menuService.isMobile$.pipe(first()).toPromise();
    return isMobile ? 2 : 4;
  }
}
