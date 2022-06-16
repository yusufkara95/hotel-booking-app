import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  booking : Booking = {
    id : 1,
    name : "Yusuf Kara",
    roomNumber : 100,
    startDate: new Date(),
    endDate: new Date("2022-06-30")
  }

  ngOnInit(): void {
  }

}
