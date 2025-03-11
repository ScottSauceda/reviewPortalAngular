import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewReview } from '../interfaces/new-review';
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
  addReview(newReview: NewReview, restaurantId: number){
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
      // 'withCredentials': 'true'
    })
    this.httpClient.post<NewReview>(environment.basePath + "/review/create/" + restaurantId, newReview, {observe: "response", headers: headers})
    .subscribe({
      next: (response) => {
        if(response){
          this.createSuccessful = true;
          console.log("review created successfully");
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log('error occured');
        console.log(error.message);
        this.router.navigate(["../"]);
      }      
    })
  }

  getSelectedReview(reviewId: String){
    return this.httpClient.get<Review>(environment.basePath + "/review/" + reviewId);
  }

  updateReview(reviewId: number, editedReview: Review){
    console.log('reviewId to be sent');
    console.log(reviewId);

    console.log('editedReview to be sent');
    console.log(editedReview);

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*",
        'Accept': 'text/html',
      }),
      responseType: 'text' as 'text',
    };

    return this.httpClient.put(environment.basePath + "/review/update/" + reviewId, editedReview, httpOptions)
  }

  deleteReview(deleteReview: Review){
    console.log("deleting review")

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*",
        'Accept': 'text/html',       
      }),
      responseType: 'text' as 'text',
      body: deleteReview
    };

    return this.httpClient.delete(environment.basePath + "/review/delete/" + deleteReview.reviewId, httpOptions)
  }
}
