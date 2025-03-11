import { User } from "./user";

export interface NewReview {
    reviewRating: number;
    reviewTitle: String;
    reviewText: String;
    reviewRestaurantId: number;
    // timeCreated?: Date;
    user: User;
}
