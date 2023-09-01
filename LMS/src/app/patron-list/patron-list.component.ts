import { Component, inject, OnInit } from '@angular/core';
import { UserLogin, UserRegister } from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patron-list',
  templateUrl: './patron-list.component.html',
  styleUrls: ['./patron-list.component.css'],
})
export class PatronListComponent implements OnInit {
  location : Location = inject(Location);
  patrons: UserRegister[] = [];
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
    const usersList = localStorage.getItem('patrons');
    if (usersList != null) {
      this.patrons = JSON.parse(usersList);
    }
    const currentUser= localStorage.getItem('currentUser')
      if(currentUser!=null){
        this.currentUser = JSON.parse(currentUser)
        console.log(this.currentUser);  
      }
  }
  logout(){
    localStorage.removeItem("currentUser");
    this.location.go('/login')
    window.location.reload()
    const loginUsers = localStorage.getItem('loginUsers')
    if(loginUsers!=null){
      this.loginUsers = JSON.parse(loginUsers)
    }
   let newLoginUsers = this.loginUsers.filter(user => user.email !== this.currentUser.email)
   localStorage.setItem('loginUsers',JSON.stringify(newLoginUsers))
  }
}
