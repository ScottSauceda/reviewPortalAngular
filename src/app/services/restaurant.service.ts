import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  getAllRestaurants(){
    return this.httpClient.get<Restaurant[]>(environment.basePath + "/restaurant/restaurants");
  }

  getRestaurantById(restaurantId: string){
    return this.httpClient.get<Restaurant>(environment.basePath + "/restaurant/" + restaurantId);
  }
}
