import { Component, inject, OnInit } from '@angular/core';
import { Booking } from '../book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css'],
})
export class ReturnBookComponent implements OnInit {
  location: Location = inject(Location);
  bookings: Booking[] = [];
  booking: Booking = {
    isbn: '',
    patronName: '',
  };
  back() {
    this.location.back();
  }
  return() {
    const newBookings = this.bookings.filter((booking) => {booking.isbn !== this.booking.isbn && booking.patronName !== this.booking.patronName});
    console.log(newBookings);

    localStorage.setItem('bookings', JSON.stringify(newBookings));
  }
  ngOnInit(): void {
    const bookingsData = localStorage.getItem('bookings');
    if (bookingsData) {
      this.bookings = JSON.parse(bookingsData);
    }
  }
}
