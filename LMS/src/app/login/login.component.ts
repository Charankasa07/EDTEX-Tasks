import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Patron, UserLogin, UserRegister } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  location: Location = inject(Location);
  registerUsers: UserRegister[] = [];
  loginUsers: UserLogin[] = [];
  patrons: Patron[] = [];
  user: UserLogin = {
    email: '',
    password: '',
  };
  currentUser='';
  message = '';
  onLogin() {
    const data = this.registerUsers.filter(
      (user) => user.email === this.user.email
    );
    if (this.currentUser) {
      if (!data.length) {
        this.message = "Mail doesn't exists";
      } 
      else {
        if (data[0].password !== this.user.password) {
          this.message = 'Wrong Password';
        } else {
          this.message = 'Logged in Successfully';
          // this.loginUsers.push(this.user);
          console.log(data[0].role);
          // localStorage.setItem('loginUsers', JSON.stringify(this.loginUsers))
          if (data[0].role === 'librarian') {
            this.cookieService.set('currentUser', JSON.stringify(data[0]),1);
            this.location.go('/patron-list');
            window.location.reload();
          } else {
            this.cookieService.set('currentUser', JSON.stringify(data[0]),1);
            this.location.go('/book-list');
            window.location.reload();
          }
        }
      }
    } else {
      this.message = "You're already logged in";
      if (data[0].role === 'librarian') {
        this.cookieService.set('currentUser', JSON.stringify(data[0]),1);
        this.location.go('/patron-list');
        window.location.reload();
      } else {
        this.cookieService.set('currentUser', JSON.stringify(data[0]),1);
        this.location.go('/book-list');
        window.location.reload();
      }
    }
  }
  ngOnInit(): void {
    const registerUsersData = localStorage.getItem('registerUsers');
    if (registerUsersData != null) {
      this.registerUsers = JSON.parse(registerUsersData);
    }
    // const loginUsersData = localStorage.getItem('loginUsers');
    // if (loginUsersData != null) {
    //   this.loginUsers = JSON.parse(loginUsersData);
    // }
    this.currentUser = this.cookieService.get('currentUser');
    if (this.currentUser) {
      let user = JSON.parse(this.currentUser);
      if (user.role === 'librarian') {
        this.location.go('/patron-list');
        window.location.reload();
      } else {
        this.location.go('/book-list');
        window.location.reload();
      }
    }
  }
}
