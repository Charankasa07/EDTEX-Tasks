import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserRegister } from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private cookieService : CookieService){}
  currentUser : UserRegister = {
    role:'',
    name:'',
    mobile:'',
    email:'',
    password:'',
    leaves:[],
    numberOfLeaves:0
  }
  ngOnInit(): void {
      let currentUser = this.cookieService.get('currentUser')
      if(currentUser){
        this.currentUser = JSON.parse(currentUser)
        if(this.currentUser.role==='employee'){
          window.location.href='http://localhost:4200/employee'
        }
        else{
          window.location.href='http://localhost:4200/manager'
        }
      }
      
  }
}
