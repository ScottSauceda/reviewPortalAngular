import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Image } from 'src/app/interfaces/image';
import { Profile } from 'src/app/interfaces/profile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  // booleans
  addingPhoto: boolean = false;
  editing: boolean = false
  profileLoaded: boolean = false;
  updateSuccessful: boolean = false;

  // id's
  profileID!: string|null;

  // update inputs
  email!: string|null;
  firstName!: string|null;
  imgName!: string;
  imgSrc!: string;
  lastName!: string|null;
  phone!: string|null;
  updateMessage!: string;

  // models
  editedProfile!: Profile;
  deleteImage!: Image;
  newImage!: Image;
  profile!: Profile;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { 
    // this.deleteImage
    // this.editedProfile
    // this.newImage
  }

  ngOnInit(): void {
    console.log("ng on init calling getUserProfile");

    this.route.paramMap.subscribe(params => {
      console.log('params');
      console.log(params);

      console.log("params: " + params.get("userId"));
      console.log("here 1");

      this.profileID = params.get("userId");
      this.profileLoaded = false;

      console.log("here 2");
      console.log(this.profileID);

      if(this.profileID){
        console.log("here 3");

        console.log("calling user profile");
        this.userService.getUserProfile(this.profileID)
        .subscribe((data: Profile) => {
          if(data){
            console.log("data returned for profile");
            console.log(data);

            this.profileLoaded = true;
            this.profile = data;

            console.log("profile - data");
            console.log(this.profile);
          } else {
            console.log("data could not be loaded. something went wrong");
          }
        })
      }
    })
  }

  // loadEditPage()

  // sendEdit()

  // cancelEdit()

  // changeAccountStatus()
  
  // addPhoto()

  // sendPhoto()

  // cancelAddPhoto()

  // deletePhoto()

}
