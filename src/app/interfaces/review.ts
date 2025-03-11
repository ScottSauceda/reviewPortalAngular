import { User } from "./user";

export interface Review {
    reviewDate?: Date;
    reviewId: number;
    reviewRating: number;
    reviewText: String;
    reviewTitle: String;
    reviewUserId: number;
    sessionUserMatch?: Boolean;
    user: User;
}
