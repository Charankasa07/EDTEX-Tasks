import { Component, inject, OnInit } from '@angular/core';
import { UserLogin, UserRegister } from '../user';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-patron-list',
  templateUrl: './patron-list.component.html',
  styleUrls: ['./patron-list.component.css'],
})
export class PatronListComponent implements OnInit {
  constructor(private cookieService: CookieService) { }
  location : Location = inject(Location);
  loginUsers: UserLogin[]=[];
  currentUser : UserRegister={
    name:'',
    email:'',
    mobile:'',
    password:'',
    dob:'',
    role:''
  };
  display=true
  ngOnInit(): void {
    const currentUser= this.cookieService.get('currentUser')
      if(currentUser!=null){
        this.currentUser = JSON.parse(currentUser)
      }
  }
  logout(){
    this.cookieService.delete("currentUser");
    this.location.go('/login')
    window.location.reload()
  //   const loginUsers = localStorage.getItem('loginUsers')
  //   if(loginUsers!=null){
  //     this.loginUsers = JSON.parse(loginUsers)
  //   }
  //  let newLoginUsers = this.loginUsers.filter(user => user.email !== this.currentUser.email)
  //  localStorage.setItem('loginUsers',JSON.stringify(newLoginUsers))
  }
}
