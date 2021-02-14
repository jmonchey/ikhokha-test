import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isMobileMenuOpenSubject: BehaviorSubject<boolean>;
  readonly isMobileMenuOpen$: Observable<boolean>;

  constructor() {
    this.isMobileMenuOpenSubject = new BehaviorSubject<boolean>(false);
    this.isMobileMenuOpen$ = this.isMobileMenuOpenSubject.asObservable();
  }

  openMobileMenu(): void {
    this.isMobileMenuOpenSubject.next(true);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpenSubject.next(false);
  }
}
