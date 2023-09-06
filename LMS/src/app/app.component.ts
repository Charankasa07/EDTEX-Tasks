import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import {UserRegister} from './user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private cookieService : CookieService,private location : Location){}
  currentUser !: UserRegister ;
  ngOnInit(): void {
      const currentUserData = this.cookieService.get('currentUser')
      if(currentUserData){
        this.currentUser=JSON.parse(currentUserData);
      }
      console.log(this.currentUser);
      
  }
  logout(){
    this.cookieService.delete("currentUser");
    this.location.go('/login')
    window.location.reload()
  }
}
