import { Image } from './image';
import { Review } from './review';


export interface Restaurant {
    address: String,
    city: String,
    ownerId: number,
    ownerName: String,
    restaurantId: number,
    // restaurantImages: Image[];
    restaurantName: String;
    restaurantReviews: Review[];
    state: String;
    zipCpde: number;
}
