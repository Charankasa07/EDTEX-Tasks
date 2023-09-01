import { Component, inject, OnInit } from '@angular/core';
import { UserRegister } from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{
  location: Location = inject(Location);
  currentUser : UserRegister ={
    name:'',
    email:'',
    mobile:'',
    password:'',
    dob:'',
    role:''
  }
  passwordError = '';
  ngOnInit(): void {
      let currentUser = localStorage.getItem('currentUser')
      if(currentUser){
        this.currentUser = JSON.parse(currentUser)
      }
  }
  passwordValidate(password: string) {
    if (password.trim().length < 6 && password.trim().length != 0) {
      this.passwordError = 'Password Length must be 6 characters long';
    } else {
      this.passwordError = '';
    }
  }
  save(){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    this.location.back()
  }
  back(){
    this.location.back()
  }
}
