import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserRegister } from '../User';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit{
  constructor(private cookieService : CookieService){}
  currentUser : UserRegister = {
    role:'',
    name:'',
    mobile:'',
    email:'',
    password:'',
    leaves:[],
    numberOfLeaves:0,
  }
  ngOnInit(): void {
      const currentUserData = this.cookieService.get('currentUser')
      if(currentUserData)[
        this.currentUser = JSON.parse(currentUserData)
      ]
  }
}
