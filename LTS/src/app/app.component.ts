import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserRegister } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private cookieService : CookieService){}
  title = 'LTS';
  currentUser : UserRegister = {
    role:'',
    name:'',
    mobile:'',
    email:'',
    password:'',
    leaves:[]
  }
  ngOnInit():void{
      const currentUserData = this.cookieService.get('currentUser')
      if(currentUserData){
        this.currentUser = JSON.parse(currentUserData)
      }
      console.log(this.currentUser);
      
  }
  logout(){
    this.cookieService.delete('currentUser');
    window.location.href = 'http://localhost:4200/login'
  }
}
