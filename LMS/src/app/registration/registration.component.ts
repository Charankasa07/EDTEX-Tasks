import { Component, inject, OnInit } from '@angular/core';
import { Patron, UserRegister } from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  location : Location = inject(Location);
  registerUsers: UserRegister[] = [];
  patrons: Patron[] = [];
  user: UserRegister = {
    name: '',
    email: '',
    mobile: '',
    password: '',
    dob: '',
    role: 'patron',
  };
  passwordError = '';
  message = '';
  onRegister() {
    const user = this.registerUsers.filter(
      (user) => user.email == this.user.email
    );
    if (!user.length) {
      this.registerUsers.push(this.user);
      localStorage.setItem('registerUsers', JSON.stringify(this.registerUsers));
      this.message = 'Successfully Registered';
      if (this.user.role === 'patron') {
        this.patrons.push(this.user);
        localStorage.setItem('patrons', JSON.stringify(this.patrons));
        localStorage.setItem('currentUser',JSON.stringify(this.user))
        this.location.go('/book-list')
        window.location.reload()
      }
      else{
        localStorage.setItem('currentUser',JSON.stringify(this.user))
        this.location.go('/patron-list')
        window.location.reload()
      }
    } else {
      this.message = 'User Already Exists';
    }
  }
  passwordValidate(password: string) {
    if (password.trim().length < 6 && password.trim().length != 0) {
      this.passwordError = 'Password Length must be 6 characters long';
    } else {
      this.passwordError = '';
    }
  }
  ngOnInit(): void {
    const registerUsersData = localStorage.getItem('registerUsers');
    if (registerUsersData != null) {
      this.registerUsers = JSON.parse(registerUsersData);
    }
    const patronsData = localStorage.getItem('patrons');
    if (patronsData != null) {
      this.patrons = JSON.parse(patronsData);
    }
  }
}
