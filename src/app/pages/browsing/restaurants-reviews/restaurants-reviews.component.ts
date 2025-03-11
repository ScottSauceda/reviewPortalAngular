import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { Image } from 'src/app/interfaces/image';
import { NewReview } from 'src/app/interfaces/new-review';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { Review } from 'src/app/interfaces/review';
import { User } from 'src/app/interfaces/user';

// StorageService
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ReviewService } from 'src/app/services/review.service';

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
  editRating!: number;
  editReviewText!: string;
  rating!: number;
  reviewText!: string;
  reviewTitle!: string;
  updateMessage!: string;

  // models
  allImages: Image[] = [];
  allReviews: Review[] = [];
  currentReview!: Review;
  editedReview!: Review;
  newReview!: NewReview;
  restaurant!: Restaurant;
  user!: User;

  constructor(
    private datePipe: DatePipe,
    config: NgbCarouselConfig,
    private restaurantService: RestaurantService,
    private reviewService: ReviewService,   
    private route: ActivatedRoute,
    private router: Router,
    // private storageService: StorageService
  ) { 
    this.newReview = {
      reviewRating: 0,
      reviewRestaurantId: 0,
      reviewText: "",
      reviewTitle: "",
      user: this.user,
    }
    this.editedReview = {
      reviewId: 0,
      reviewRating: 0,
      reviewText: "",
      reviewTitle: "",
      reviewUserId: 0,
      user: this.user
    }
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


  addReview(){
    console.log("add review clicked");
    this.adding = true;
  }

  cancelAddReview(){
    console.log("cancel add review clicked");
    this.adding = false;
  }

  sendAddReview(){
    console.log("send add review clicked");
    this.newReview.reviewRating = this.rating;
    this.newReview.reviewText = this.reviewText;
    this.newReview.user = this.restaurant.restaurantReviews[0].user;
    // this.newReview.userId = this.sessionId; will be changed to sessionId once we get sesion based login working
    // this.newReview.user.userId = this.restaurant.restaurantReviews[0].user.userId; // just go with userId of first review loaded in for restaurant for now
    this.newReview.reviewRestaurantId = this.restaurant.restaurantId;
    // const dateString = this.datePipe.transform(Date.now(), 'YYYY-MM-dd hh:mm:ss');
    // console.log(dateString);
    // if(dateString){
    //   this.newReview.timeCreated = new Date(dateString);
    // }

    console.log("sending to reviewService.addReview");
    console.log(this.newReview);

    this.reviewService.addReview(this.newReview, this.restaurant.restaurantId);
  }

  // editReivew()(){ will rename this as editReivew() to keep naming conventions consistent
  editReview(selectedReview: Review){
    console.log("edit review clicked");
    this.editing = true;

    this.editReviewId = selectedReview.reviewId;
    console.log("selectedReview Id: " + selectedReview.reviewId);
    console.log("this.editReviewId: " + this.editReviewId);

    this.currentReview = selectedReview;
  }

  cancelEditReview(){
    console.log("cancel edit review clicked");
    this.editing = false;
    this.editedReview.reviewId = 0;
    this.editedReview.user.userId = 0;
    this.editedReview.reviewRating = 0;
    this.editedReview.reviewText = "";
    this.editedReview.reviewTitle = "";
  }

  sendEdit(){
    console.log("send edit review clicked");

    this.editedReview.reviewId = this.currentReview.reviewId;
    this.editedReview.user = this.currentReview.user;
    this.editedReview.reviewTitle = this.currentReview.reviewTitle;
    // this.editedReview.user.userId = this.currentReview.user.userId;

    // if(this.editReviewText = ""){
      // this.editedReview.reviewText = this.currentReview.reviewText;
      // console.log('edit review input text was empty');
      // console.log('using current review text');
    // } else {
      this.editedReview.reviewText = this.editReviewText;
      console.log("edit review input text was given");
      console.log('sending new reviewText for edit');
    // }

    this.editedReview.reviewRating = this.editRating;

    console.log("this.editReview");
    console.log(this.editedReview);

    this.reviewService.updateReview(this.currentReview.reviewId, this.editedReview)
    .subscribe(
      res => {
        this.updateSuccessful = true;
        console.log('HTTP response', res);
        this.updateMessage = res;
      },
      err => {
        console.log('HTTP Error', err.error);
        this.updateMessage = err.error;
      },
      () => console.log('HTTP request completed')
    );
  }

  deleteReview(selectedReview: Review){
    console.log("delete review clicked");
    console.log(selectedReview.reviewId);

    this.reviewService.deleteReview(selectedReview)
    .subscribe(
      res => {
        this.deleteSuccessful = true;
        console.log('HTTP response', res),
        this.deleteMessage = res;
      },
      err => {
        console.log('HTTP Error', err.error),
        this.deleteMessage = err.error;
      },
      () => console.log('HTTP request completed.')
    );
  }
}
