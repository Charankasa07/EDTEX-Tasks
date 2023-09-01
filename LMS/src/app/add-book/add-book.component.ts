import { Component ,inject} from '@angular/core';
import { Book } from '../book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  location : Location = inject(Location)
  books : Book[]=[]
    book : Book ={
      isbn :'',
      title:'',
      author :'',
      quantity:0,
    }
    addBook(){
      const booksData = localStorage.getItem('books')
      if(booksData){
        this.books=JSON.parse(booksData)
        this.books.push(this.book)
        localStorage.setItem('books',JSON.stringify(this.books))
        this.location.back()
      }
      else{
        this.books.push(this.book)
        localStorage.setItem('books',JSON.stringify(this.books))
        this.location.back()
      }
    }
    back(){
      this.location.back()
    }
}
