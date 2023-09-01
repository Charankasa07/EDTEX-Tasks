import { Component, inject } from '@angular/core';
import { Booking } from '../book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent {
  location : Location = inject(Location)
  bookings : Booking[]=[]
    booking : Booking = {
      isbn :'',
      patronName :'',
    }
    back(){
      this.location.back()
    }
    return(){
      const bookingsData = localStorage.getItem('bookings');
      if(bookingsData){
        this.bookings=JSON.parse(bookingsData);
        const newBookings = this.bookings.filter(booking=>booking !== this.booking)
        localStorage.setItem('bookings',JSON.stringify(newBookings))
      }
    }
}
