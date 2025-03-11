import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// BrowserAnimationsModule
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// httpInterceptorProviders
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from '@angular/core';
// MatButtonModule
// MatInputModule
// MatListModule
// MatStepperModule

// BoardProfileComponent
// BoardUserComponent
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantCardComponent } from './components/cards/restaurant-card/restaurant-card.component';
import { RestaurantsReviewsComponent } from './pages/browsing/restaurants-reviews/restaurants-reviews.component';
import { RestaurantsComponent } from './pages/browsing/restaurants/restaurants.component';
import { ReviewCardComponent } from './components/cards/review-card/review-card.component';
// ReviewComponent
import { SignupComponent } from './pages/signup/signup.component';
import { BoardProfileComponent } from './board-profile/board-profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ReviewComponent } from './pages/dashboard/review/review.component';
import { UserProfileComponent } from './pages/dashboard/user-profile/user-profile.component';
import { UserReviewsComponent } from './pages/dashboard/user-reviews/user-reviews.component';
// UserProfileComponent
// UserReviewsComponent

@NgModule({
  declarations: [
    AppComponent,
    // BoardProfileComponent
    // BoardUserComponent
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RestaurantCardComponent,
    RestaurantsReviewsComponent,
    RestaurantsComponent,
    ReviewCardComponent,
    // ReviewComponent
    SignupComponent,
    BoardProfileComponent,
    BoardUserComponent,
    ReviewComponent,
    UserProfileComponent,
    UserReviewsComponent
    // UserProfileComponent
    // UserReviewsComponent
  ],
  imports: [
    AppRoutingModule,
    // BrowserAnimationsModule
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // MatButtonModule
    // MatInputModule
    // MatListModule
    // MatStepperModule
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, ],  // <-- httpInterceptorProviders
  bootstrap: [AppComponent]
})
export class AppModule { }
