import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserLogin, UserRegister } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private cookieService : CookieService){}
    users:UserRegister[]=[];
    currentUser : UserLogin = {
      email:'',
      password:''
    }
    onLogin(){
        const userData = this.users.filter(user=>user.email === this.currentUser.email);
        if(!userData.length){
          alert("User doesn't exists")
        }
        else{
          if(userData[0].password!==this.currentUser.password){
            alert("Password didn't matched")
          }
          else{
            this.cookieService.set('currentUser',JSON.stringify(userData[0]),1,'')
            if(userData[0].role==='employee'){
              window.location.href = 'http://localhost:4200/employee'
            }
            else{
              window.location.href='http://localhost:4200/manager'
            }
          }
        }
    }
    ngOnInit(): void {
        const usersData = localStorage.getItem('users');
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
