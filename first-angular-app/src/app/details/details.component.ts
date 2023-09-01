import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation/housinglocation';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { ApplyForm } from './applyForm';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation!: HousingLocation | undefined;

  applyForm : ApplyForm = {
    firstName : '',
    lastName : '',
    email:''
  };

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => (this.housingLocation = housingLocation));
  }

  submitApplication() {
    this.housingService.submitApplication(this.applyForm);
  }
}
