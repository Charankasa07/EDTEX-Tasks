import { Component } from '@angular/core';
import { UserLogin } from '../registration/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user : UserLogin = {
      email : "",
      password : ""
    }

    onLogin(){
      console.log(this.user);
    }
}
