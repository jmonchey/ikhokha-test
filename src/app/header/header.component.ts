import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'ik-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileMenuOpen$ = this.menuService.isMobileMenuOpen$;

  constructor(private menuService: MenuService) { }

  openMobileMenu(): void {
    this.menuService.openMobileMenu();
  }

  closeMobileMenu(): void {
    this.menuService.closeMobileMenu();
  }
}
