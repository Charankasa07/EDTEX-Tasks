import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../User';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
    numberOfLeaves !: number ;
    users : UserRegister[]=[]
    ngOnInit():void{
      const usersData = localStorage.getItem('users')
      if(usersData){
        this.users = JSON.parse(usersData)
      }
    }
    onSubmit(){
      this.users.forEach(user => {
        if(user.role==='employee'){
          user.numberOfLeaves=this.numberOfLeaves
        }
      })
      localStorage.setItem('users',JSON.stringify(this.users))
    }
}
