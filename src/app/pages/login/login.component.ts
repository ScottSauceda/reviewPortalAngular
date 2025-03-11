import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

// import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;

  // pre JWT Auth
  errorOccured: boolean = false;
  loginForm: FormGroup;
  loginMessage!: string;
  user!: User;
  userID!: string|null;

  // new JWT Auth
  // errorMessage = '';
  // roles: string[] = [];

  // form: any = {
  //   username: null,
  //   password: null
  // }

  constructor(
    // private authService: AuthService, 
    private storageService: StorageService, 
    private router: Router, private userService: UserService,
  ) { 
    this.loginForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
    })
  }

  ngOnInit(): void {
    // if(this.storageService.isLoggedIn()){
      // this.isLoggedIn = true;
      // this.roles = this.storageService.getUser().roles;
    // }
  }

  userHomeRedirect(userId: string){
    console.log("go to userHome", userId);

    localStorage.setItem('userId', userId);

    console.log('localStorage');
    console.log(localStorage.getItem('userId'));

    this.router.navigate([`/user/$[userId]`])
  }

    // !! OLD LOGIN !!
    submitForm(){
      console.log("login clicked");
      console.log(this.loginForm.value);

      // when we switch to different version of form with JWT
      // console.log(this.form.username );
      // console.log(this.form.password );

      console.log('login completed');
      this.userService.login(this.loginForm.value).subscribe(
      //   (data: HttpResponse<User>) => {
      //     if(data){
      //       console.log("data returned");
      //       console.log(data);

      //       if(data.body?.roles[0] !== "ROLE_USER"){
      //         console.log("role does not equal user, redirecting to signup");
      //         window.location.replace("/signup");
      //       } else {
      //         this.user = data.body;

      //         console.log("this.user from login")
      //         console.log(this.user);
      //         sessionStorage.setItem("userLoginStatus", "true");
      //         sessionStorage.setItem("userId", this.user.userId.toLocaleString());
      //         sessionStorage.setItem('username', this.user.userName);

      //         console.log('session: loginStatus');
      //         console.log(sessionStorage.getItem('userLoginStatus'));

      //         console.log('session: userId');
      //         console.log(sessionStorage.getItem('userId'));

      //         console.log('session: username');
      //         console.log(sessionStorage.getItem('username'));

      //         // window.location.replace("/user/"+sessionStorage.getItem('userId'));
      //       }
      //     } else {
      //       alert("incorrect credentials");
      //       // window.location.replace("/signup");
      //     }
      //   },
      //   err => {
      //     console.log('HTTP Error', err.error.message),
      //     this.errorOccured = true;
      //     this.loginMessage = err.error.message;
      //   },
      //   () => console.log('HTTP request completed.')
      );
    }


    // !! NEW LOGIN !!
    // onSubmit(): void {
      // console.log("login clicked");
    //   const { username, password } = this.form;
      
    //   this.authService.login(username, password).subscribe({
    //     next: data => {
    //       this.storageService.saveUser(data);

    //       this.isLoginFailed = false;
    //       this.isLoggedIn = true;
    //       this.roles = this.storageService.getUser().roles;
    //       this.reloadPage();
    //     },
    //     error: err => {
    //       this.errorMessge = err.error.message;
    //       this.isLoggedIn = true;
    //     }
    //   })
    // }

    // reloadPage(): void {
    //   window.location.reload();
    // }
}
