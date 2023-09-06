import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserRegister } from '../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  constructor(private cookieService : CookieService){}
  users : UserRegister[] =[];
    user : UserRegister = {
      role:'employee',
      name :'',
      mobile:'',
      email:'',
      password:'',
      leaves:[],
    }
    onRegister(){
        const userData = this.users.filter(user => user.email === this.user.email)
        if(userData.length){
          alert('Email already exist');
        }
        else{
          this.users.push(this.user)
          localStorage.setItem('users',JSON.stringify(this.users))
          this.cookieService.set('currentUser',JSON.stringify(this.user),1,'')
          if(this.user.role==='employee'){
            window.location.href='http://localhost:4200/employee'
          }
          else{
            window.location.href='http://localhost:4200/manager'
          }

        }
      
    }
    ngOnInit(): void {
        const usersData = localStorage.getItem('users')
        if(usersData){
          this.users = JSON.parse(usersData)
        }
        const user = this.cookieService.get('currentUser')
        if(user){
          let userData : UserRegister = JSON.parse(user)
          if(userData.role === 'employee'){
            window.location.href = 'http://localhost:4200/employee'
          }
          else{
            window.location.href = 'http://localhost:4200/manager'
          }
        }
    }
}
