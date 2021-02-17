import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { distinctUntilChanged, filter, map, takeUntil, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnDestroy {
  private isMobileMenuOpenSubject: BehaviorSubject<boolean>;
  readonly isMobileMenuOpen$: Observable<boolean>;
  readonly isMobile$: Observable<boolean>;

  private destroy$: Subject<void>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobileMenuOpenSubject = new BehaviorSubject<boolean>(false);
    this.isMobileMenuOpen$ = this.isMobileMenuOpenSubject.asObservable();
    this.isMobile$ = this.breakpointObserver.observe('(max-width: 599px)').pipe(
      map(result => result.matches)
    );

    this.destroy$ = new Subject<void>();

    this.isMobile$.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
      filter(isMobile => !isMobile),
      withLatestFrom(this.isMobileMenuOpen$),
      filter(([isMobile, isMobileMenuOpen]) => isMobileMenuOpen)
    ).subscribe(() => {
      // Close the mobile menu if we are not in mobile view.
      this.isMobileMenuOpenSubject.next(false);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  openMobileMenu(): void {
    this.isMobileMenuOpenSubject.next(true);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpenSubject.next(false);
  }
}
