import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  books : Book[]=[]; 
  ngOnInit(): void {
      const booksData = localStorage.getItem('books')
      if(booksData){
        this.books=JSON.parse(booksData)
      }
  }
}
