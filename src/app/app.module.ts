import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantCardComponent } from './components/cards/restaurant-card/restaurant-card.component';
import { RestaurantsComponent } from './pages/browsing/restaurants/restaurants.component';
import { RestaurantsReviewsComponent } from './pages/browsing/restaurants-reviews/restaurants-reviews.component';
import { ReviewCardComponent } from './components/cards/review-card/review-card.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantsReviewsComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantCardComponent,
    ReviewCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
