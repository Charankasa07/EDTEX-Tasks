import { Component, inject, OnInit } from '@angular/core';
import { HousingLocation } from '../housinglocation/housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  houseLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  filteredHousingLocations: HousingLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocation()
      .then((housingLocationList: HousingLocation[]) => {
        this.houseLocationList = housingLocationList;
        this.filteredHousingLocations = housingLocationList;
      });
  }
  // ngOnInit(): void {
  //   this.houseLocationList = this.housingService.getAllHousingLocation();
  //   this.filteredHousingLocations = this.houseLocationList;
  // }

  filterResults(city: string) {
    console.log(city);

    if (!city) {
      this.filteredHousingLocations = this.houseLocationList;
    }
    this.filteredHousingLocations = this.houseLocationList.filter((house) =>
      house.city.toLowerCase().includes(city.toLowerCase())
    );
  }
}
