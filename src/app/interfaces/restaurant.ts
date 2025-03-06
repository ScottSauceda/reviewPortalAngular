// import { Image } from './image';
import { Review } from './review';


export interface Restaurant {
    address: String,
    city: String,
    restaurantName: String;
    ownerId: number,
    ownerName: String,
    restaurantId: number,
    // restaurantImages: Image[];
    restaurantReviews: Review[];
    state: String;
    zipCpde: number;
}
