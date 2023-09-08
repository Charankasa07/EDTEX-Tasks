import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserRegister ,Leave} from '../User';
import {faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-track-leaves',
  templateUrl: './track-leaves.component.html',
  styleUrls: ['./track-leaves.component.css'],
})
export class TrackLeavesComponent implements OnInit {
  constructor(private cookieService: CookieService) {}
  currentUser: UserRegister = {
    role: '',
    name: '',
    mobile: '',
    email: '',
    password: '',
    leaves: [],
    numberOfLeaves:0,
  };
  deleteIcon = faTrashCan
  editIcon = faPenToSquare
  ngOnInit(): void {
    const currentUserData = this.cookieService.get('currentUser');
    if (currentUserData) {
      this.currentUser = JSON.parse(currentUserData);
    }
    console.log(this.currentUser)
  }
  delete(id: string) {
    this.currentUser.leaves = this.currentUser.leaves.filter(
      (leave) => leave.id !== id
    );
    this.currentUser.numberOfLeaves+=1
    this.cookieService.delete('currentUser')
    this.cookieService.set('currentUser', JSON.stringify(this.currentUser),1,'/');
    
    let users: UserRegister[] = [];
    const usersData = localStorage.getItem('users');
    if (usersData) {
      users = JSON.parse(usersData);
      users.forEach((user) => {
        if (user.email === this.currentUser.email) {
          user.leaves = user.leaves.filter((leave) => {
            leave.id !== id;
          });
          user.numberOfLeaves+=1
        }
      });
    }
    localStorage.setItem('users',JSON.stringify(users))
    window.location.reload()
  }
}
