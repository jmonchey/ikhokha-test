import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { BlogPostSummaryComponent } from './landing-page/blog-post-summary/blog-post-summary.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CtaButtonComponent } from './shared/components/cta-button/cta-button.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileMenuComponent,
    LandingPageComponent,
    ProductsPageComponent,
    BlogPageComponent,
    ContactPageComponent,
    BlogPostSummaryComponent,
    CtaButtonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
