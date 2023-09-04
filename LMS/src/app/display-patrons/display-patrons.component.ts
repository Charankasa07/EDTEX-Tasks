import { Component, OnInit } from '@angular/core';
import { Patron } from '../user';

@Component({
  selector: 'app-display-patrons',
  templateUrl: './display-patrons.component.html',
  styleUrls: ['./display-patrons.component.css']
})
export class DisplayPatronsComponent implements OnInit{
  patrons : Patron[]=[]
  ngOnInit(): void {
    const usersList = localStorage.getItem('patrons');
    if (usersList != null) {
      this.patrons = JSON.parse(usersList);
    }
  }
}
