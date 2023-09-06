import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserRegister ,Leave} from '../User';

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
  };
  ngOnInit(): void {
    const currentUserData = this.cookieService.get('currentUser');
    if (currentUserData) {
      this.currentUser = JSON.parse(currentUserData);
    }
  }
  delete(id: string) {
    this.currentUser.leaves = this.currentUser.leaves?.filter(
      (leave) => leave.id !== id
    );
    this.cookieService.set('currentUser', JSON.stringify(this.currentUser));
    let users: UserRegister[] = [];
    const usersData = localStorage.getItem('users');
    if (usersData) {
      users = JSON.parse(usersData);
      users.forEach((user) => {
        if (user.email === this.currentUser.email) {
          user.leaves = user.leaves.filter((leave) => {
            leave.id !== id;
          });
        }
      });
    }
    localStorage.setItem('users',JSON.stringify(users))
    let leaves : Leave[]=[];
    const leavesData = localStorage.getItem('leaves')
    if(leavesData){
      leaves = JSON.parse(leavesData)
    }
    leaves = leaves.filter(leave => leave.id !== id)
    localStorage.setItem("leaves",JSON.stringify(leaves))
  }
}
