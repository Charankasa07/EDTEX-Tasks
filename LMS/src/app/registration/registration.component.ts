import { Component } from '@angular/core';
import { UserRegister } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    user : UserRegister = {
      name:"",
      email:"",
      mobile :"",
      password:"",
      dob:""
    }

    onRegister(){
      console.log(this.user);
    }
}
