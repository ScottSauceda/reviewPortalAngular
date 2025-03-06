import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// NewReview import here
import { RestaurantReview } from '../interfaces/restaurant-review';
import { Review } from '../interfaces/review';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  createSuccessful:boolean = false;
  editSuccessful:boolean = false;
  deleteSuccessful:boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllRestaurantReviews(restaurantId: String){
     console.log("getting all restaurant reviews")
     return this.httpClient.get<RestaurantReview[]>(environment.basePath + "/restaurantReview/" + restaurantId);
  }

  // getAllReviews(){
  //    console.log("getting all reviews")
  //    return this.httpClient.get<Review[]>(environemnt.basePath + "/review/reviews");
  // }

  // getReviewsByUser

  // addReview

  // getSelectedReview

  // updateReview

  

}
