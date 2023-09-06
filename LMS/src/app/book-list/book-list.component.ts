import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../book';
import { UserLogin, UserRegister } from '../user';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  constructor(private cookieService: CookieService) { }
  location : Location = inject(Location);
  loginUsers : UserLogin[]=[]
    books : Book[] =[]
    display=true
    currentUser : UserRegister={
      name:'',
      email:'',
      mobile:'',
      password:'',
      dob:'',
      role:''
    };
    ngOnInit():void{
      const currentUser= this.cookieService.get('currentUser')
      if(currentUser!=null){
        this.currentUser = JSON.parse(currentUser)
        console.log(this.currentUser);  
      }
      const booksData = localStorage.getItem('books')
      if(booksData){
        this.books = JSON.parse(booksData)
      }
      
    }
}
