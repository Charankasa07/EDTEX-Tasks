import { Component, Input } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housinglocation.component.html',
  styleUrls: ['./housinglocation.component.css']
})
export class HousinglocationComponent {
    @Input() house !: HousingLocation;
}
