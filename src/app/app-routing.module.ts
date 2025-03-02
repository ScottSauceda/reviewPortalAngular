import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/browsing/restaurants/restaurants.component';
import { RestaurantsReviewsComponent } from './pages/browsing/restaurants-reviews/restaurants-reviews.component';

const routes: Routes = [
  { path : "home", component: HomeComponent},
  { path : "restaurants", 
    children: [
      { path: "", pathMatch: "full", component: RestaurantsComponent},
      { path: ":restaurantId", component: RestaurantsReviewsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
