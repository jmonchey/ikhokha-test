import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { MenuService } from './services/menu.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  private destroy$: Subject<void>;

  constructor(private menuService: MenuService) {
    this.destroy$ = new Subject<void>();
  }

  ngAfterViewInit(): void {
    this.menuService.isMobileMenuOpen$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(isOpen => {
      if (isOpen) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
