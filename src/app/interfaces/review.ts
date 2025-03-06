import { User } from "./user";

export interface Review {
    reviewId: number;
    reviewRating: number;
    reviewText: String;
    reviewUserId: number;
    sessionUserMatch?: Boolean;
    reviewDate?: Date;
    user: User;
}
