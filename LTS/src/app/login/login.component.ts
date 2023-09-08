import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserLogin, UserRegister } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private cookieService: CookieService) {}
  users: UserRegister[] = [];
  currentUser: UserLogin = {
    email: '',
    password: '',
  };
  message = '';
  displayMessage = false;
  onLogin() {
    //filtering the user data from users in local storage
    //by comparing the email
    const userData = this.users.filter(
      (user) => user.email === this.currentUser.email
    );
    //checking if the user exists or not so as to continue the login procedure
    if (!userData.length) {
      //displaying error message
      this.message = "User doesn't exists";
      this.displayMessage = true;
      setTimeout(() => (this.displayMessage = false), 2000);
    } else {
      //comparing the user entered password
      // with the password in the localstorage for the corresponging user
      if (userData[0].password !== this.currentUser.password) {
        //displaying the error message
        this.message = 'Incorrect Password';
        this.displayMessage = true;
        setTimeout(() => (this.displayMessage = false), 2000);
      } else {
        this.cookieService.delete('currentUser');
        this.cookieService.set(
          'currentUser',
          JSON.stringify(userData[0]),
          1,
          '/'
        );
        //redirecting the user based on the user role
        if (userData[0].role === 'employee') {
          window.location.href = 'http://localhost:4200/employee';
        } else {
          window.location.href = 'http://localhost:4200/manager';
        }
      }
    }
  }
  ngOnInit(): void {
    const usersData = localStorage.getItem('users');
    if (usersData) {
      this.users = JSON.parse(usersData);
    }
    const user = this.cookieService.get('currentUser');
    if (user) {
      let userData: UserRegister = JSON.parse(user);
      //if there is already user data in the cookie storage
      //then redirect them to respective dashboards
      if (userData.role === 'employee') {
        window.location.href = 'http://localhost:4200/employee';
      } else {
        window.location.href = 'http://localhost:4200/manager';
      }
    }
  }
}
