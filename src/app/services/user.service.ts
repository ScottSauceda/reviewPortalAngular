import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Image } from '../interfaces/image';
import { Injectable } from '@angular/core';
// import { NewProfile } 
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile'; 
import { Router } from '@angular/router'; 
import { StorageService } from './storage.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: any;

  createSuccessful:boolean = false;
  deleteSuccessful:boolean = false;
  statusChanged:boolean = false;
  updateSuccessful:boolean = false;

  constructor(private httpClient: HttpClient, private storageService: StorageService, private router: Router) { }

  // Sign Up
  createUser(){ const httpOptions = {

  };

  // return this.httpClient.post(environment.basePath + "/user/signup", newProfile, httpOptions)
  }

  login(user: Credential){
    console.log("user to be sent to login");
    console.log(user);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "foodie": "" }),
      withCredentials: true,
      credentials: 'true',
      observe: 'response' as 'response'
    };

    // return this.httpClient.post<User>(environment.basePath + "/auth/signin", user);
    return this.httpClient.post<User>(environment.basePath + "/auth/signin/", user, httpOptions);
  }

  // logout
  logout(){
    console.log("user service logged out clicked");

    // return this.httpClient.post(environment.basePath + "/auth/signout", {})

    return this.httpClient.post(environment.basePath + "/auth/signout", {observe: "response"})
    .subscribe({
      next: (response) => {
        if(response){
          this.updateSuccessful = true;
        }
        window.location.reload;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        this.router.navigate(["../"]);
      }     
    })
  }

  // getUserProfile
  getUserProfile(userId: string){
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     withCredentials: 'true',
    //   })
    // };
    return this.httpClient.get<Profile>(environment.basePath + "/user/" + userId);
  }

  // updateProfile

  // updateActiveStatus

  // addProfilePhoto

  // deleteProfilePhoto

  // JWT checks
  // getPublicContent(): Observable<any> {
  // }

  // getUserBoard(): Observable<any> {
  // }

  // getOwnerBoard(): Observable<any> {
  // }

  // getAdminBoard(): Observable<any> {
  // }

  // getUserDetails(): Observable<any> { 
  // }
}