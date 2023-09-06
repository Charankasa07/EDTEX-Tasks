import { Component, inject } from '@angular/core';
import { Patron, UserRegister } from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-patron',
  templateUrl: './add-patron.component.html',
  styleUrls: ['./add-patron.component.css']
})
export class AddPatronComponent {
  location: Location = inject(Location);
  patrons : Patron[]=[]
  registerUsers : UserRegister[]=[]
  patron : UserRegister ={
    name:'',
    email:'',
    mobile:'',
    password:'',
    dob:'',
    role:''
  }
  passwordError = '';
  message=''
  ngOnInit(): void {
      const patronsData = localStorage.getItem('patrons')
      if(patronsData){
        this.patrons=JSON.parse(patronsData)
      }
  }
  passwordValidate(password: string) {
    if (password.trim().length < 6 && password.trim().length != 0) {
      this.passwordError = 'Password Length must be 6 characters long';
    } else {
      this.passwordError = '';
    }
  }
  addPatron(){
      const filteredPatrons = this.patrons.filter(patron => patron.email === this.patron.email)
      if(filteredPatrons.length){
          this.message = "Patron with given mail id alread exists"
      }
      else{
        this.patron.role="patron";
        this.patrons.push(this.patron)
        localStorage.setItem("patrons", JSON.stringify(this.patrons))
        const registerUsersData = localStorage.getItem('registerUsers')
        if(registerUsersData){
          this.registerUsers = JSON.parse(registerUsersData)
          this.registerUsers.push(this.patron)
          localStorage.setItem('registerUsers',JSON.stringify(this.registerUsers))
          this.location.go('/patron-list/view-patrons')
          window.location.reload()
        }
      }
  }
  back(){
    this.location.back()
  }
}
