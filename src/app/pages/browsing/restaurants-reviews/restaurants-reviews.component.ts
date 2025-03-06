import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Image } from 'src/app/interfaces/image';
// NewReview
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { Review } from 'src/app/interfaces/review';

import { RestaurantService } from 'src/app/services/restaurant.service';
import { ReviewService } from 'src/app/services/review.service';
// StorageService

@Component({
  selector: 'app-restaurants-reviews',
  templateUrl: './restaurants-reviews.component.html',
  styleUrls: ['./restaurants-reviews.component.scss']
})
export class RestaurantsReviewsComponent implements OnInit {

  // booleans
  adding: boolean = false;
  editing: boolean = false;
  deleteSuccessful: boolean = false;
  restaurantHasImages: boolean = false;
  reviewsLoaded: boolean = false;
  sessionActive: boolean = false;
  updateSuccessful: boolean = false;

  // id's
  editReviewId!: number;
  restaurantId!: string|null;
  sessionId!: number;
  userId!: string;

  // inputs
  deleteMessage!: string;
  editedReview!: Review;
  editRating!: number;
  editReviewText!: string;
  rating!: number;
  reviewText!: string;
  updateMessage!: string;

  // models
  allImages: Image[] = [];
  allReviews: Review[] = [];
  currentReview!: Review;
  // newReview!: NewReview;
  restaurant!: Restaurant;

  constructor(
    private datePipe: DatePipe,
    config: NgbCarouselConfig,
    private restaurantService: RestaurantService,
    private reviewService: ReviewService,   
    private route: ActivatedRoute,
    private router: Router,
    // private storageService: StorageService
  ) { 
    // this.newReview = {}
    // this.editedReview = {}
    config.interval = 0;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    // this.isLoggedIn = this.storageService.isLoggedIn();

    // if(this.isLoggedIn){}

    console.log("ng on init calling getAllRestaurantReviews: ");
    this.route.paramMap.subscribe(params => {

      console.log("params: " + params.get("restaurantId"));
      console.log("here 1");

      this.restaurantId = params.get("restaurantId");
      this.reviewsLoaded = false;

      console.log("here 2");
      console.log("this.restaurantId: " + this.restaurantId);

      if(this.restaurantId){
        console.log("here 3")

        console.log("calling restaurant");
        this.restaurantService.getRestaurantById(this.restaurantId).subscribe((data: Restaurant) => {
          if(data){
            console.log("here 4")
            this.reviewsLoaded = true;
            this.restaurant = data;

            console.log("restaurant - data");
            console.log(this.restaurant);

            for(let i = 0; i < this.restaurant.restaurantReviews.length; i++){
              this.allReviews.push(this.restaurant.restaurantReviews[i]);

              console.log("review user");
              console.log(this.restaurant.restaurantReviews[i].user.toString());

              // console.log("review user");
              // console.log(this.restaurant.restaurantReviews[i].user.toString());
              
              // if else sessionId code here
            }

            console.log("all reviews");
            console.log(this.allReviews);

            // if else images code here

            // console.log("all images");
            // console.log(this.allImages);
          }
        })
      }
    })
  }

  sendAddReview(){}

  addReview(){}

  cancelAddReview(){}

  loadEditPage(){}

  sendEdit(){}

  cancelEditReview(){}

  deleteReview(){}

}
