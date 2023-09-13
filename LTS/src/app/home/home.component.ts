import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  currentUser: UserRegister = {
    role: '',
    name: '',
    mobile: '',
    email: '',
    password: '',
    leaves: [],
    numberOfLeaves: 0,
  };
  ngOnInit(): void {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.currentUser = JSON.parse(currentUser);
      //if there is already user data in the cookie storage
      //then redirect them to respective dashboards
      if (this.currentUser.role === 'employee') {
        window.location.href = 'http://localhost:4200/employee';
      } else {
        window.location.href = 'http://localhost:4200/manager';
      }
    }
  }
}
