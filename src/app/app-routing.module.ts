import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardProfileComponent } from './board-profile/board-profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantsReviewsComponent } from './pages/browsing/restaurants-reviews/restaurants-reviews.component';
import { RestaurantsComponent } from './pages/browsing/restaurants/restaurants.component';
import { ReviewComponent } from './pages/dashboard/review/review.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/dashboard/user-profile/user-profile.component';
import { UserReviewsComponent } from './pages/dashboard/user-reviews/user-reviews.component';

const routes: Routes = [
  { path : 'boardprofile', component: BoardProfileComponent },
  { path : 'boarduser', component: BoardUserComponent },
  { path : "home", component: HomeComponent },
  { path : "login", component: LoginComponent },
  { path : "restaurants", 
    children: [
      { path: "", pathMatch: "full", component: RestaurantsComponent },
      { path: ":restaurantId", component: RestaurantsReviewsComponent },
    ]
  },
  { path : "signup", component: SignupComponent },
  { path : "user/:userId",
    children : [
      { path: "", pathMatch: "full", component: UserProfileComponent },
      { path: "userReviews",
        children : [
          { path: "", pathMatch: "full", component: UserReviewsComponent },
          { path: ":reviewId", component: ReviewComponent }
        ]  
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
