import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuid } from 'uuid';
import { Location } from '@angular/common';
import { Leave, UserRegister } from '../User';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css'],
})
export class ApplyLeaveComponent implements OnInit {
  constructor(
    private cookieService: CookieService,
    private location: Location
  ) {}
  leaves: Leave[] = [];
  users: UserRegister[] = [];
  currentUser: UserRegister = {
    leaves: [],
    role: '',
    name: '',
    mobile: '',
    email: '',
    password: '',
    numberOfLeaves: 0,
  };
  leave: Leave = {
    id: uuid(),
    name: '',
    type: 'sick leave',
    startDate: '',
    endDate: '',
    reason: '',
    status: 'pending',
    managerReason: '',
  };
  message = '';
  displayMessage = false;
  onApplyLeave() {
    if (this.currentUser.numberOfLeaves > 0) {
      const user = this.users.filter(
        (user) => user.email === this.currentUser.email
      );
      const startDate = new Date(this.leave.startDate).toISOString();
      if (startDate >= new Date().toISOString()) {
        const endDate = new Date(this.leave.endDate).toISOString();
        if (endDate >= startDate) {
          if (user.length) {
            this.leave.name = this.currentUser.name;

            this.currentUser.leaves.push(this.leave);
            this.currentUser.numberOfLeaves =
              this.currentUser.numberOfLeaves - 1;
          }
          this.cookieService.delete('currentUser');
          this.cookieService.set(
            'currentUser',
            JSON.stringify(this.currentUser),
            1,
            ''
          );
          this.users.forEach((user) => {
            if (user.email === this.currentUser.email) {
              user.leaves.push(this.leave);
              user.numberOfLeaves -= 1;
            }
          });
          localStorage.setItem('users', JSON.stringify(this.users));
          this.leaves.push(this.leave);
          localStorage.setItem('leaves', JSON.stringify(this.leaves));
          window.location.href = 'http://localhost:4200/employee/track-leaves';
        } else {
          this.message =
            'End Date must be Start Date or greater than Start Date';
          this.displayMessage = true;
          setTimeout(() => (this.displayMessage = false), 2000);
        }
      } else {
        this.message = 'Start Date must be from Today or greater';
        this.displayMessage = true;
        setTimeout(() => (this.displayMessage = false), 2000);
      }
    } else {
      alert('You are out of leaves');
    }
  }
  ngOnInit(): void {
    const usersData = localStorage.getItem('users');
    if (usersData) {
      this.users = JSON.parse(usersData);
    }
    this.currentUser = JSON.parse(this.cookieService.get('currentUser'));
    const leavesData = localStorage.getItem('leaves');
    if (leavesData) {
      this.leaves = JSON.parse(leavesData);
    }
  }
}
