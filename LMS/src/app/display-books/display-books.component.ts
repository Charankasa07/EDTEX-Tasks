import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit{
  books !: Book[]
  ngOnInit(){
    const booksData = localStorage.getItem('books')
    if(booksData){
      this.books = JSON.parse(booksData)
    }
  }
}
