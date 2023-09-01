import { Component ,inject} from '@angular/core';
import { Booking } from '../book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent {
  location : Location = inject(Location)
  bookings : Booking[]=[]
    booking : Booking = {
      isbn :'',
      patronName :'',
    }
    back(){
      this.location.back()
    }
    borrow(){
        const bookingsData = localStorage.getItem('bookings')
        if(bookingsData){
          this.bookings = JSON.parse(bookingsData)
          this.bookings.push(this.booking)
          localStorage.setItem('bookings',JSON.stringify(this.bookings))
        }
        else{
          this.bookings.push(this.booking)
          localStorage.setItem("bookings",JSON.stringify(this.bookings))
        }
    }
}
