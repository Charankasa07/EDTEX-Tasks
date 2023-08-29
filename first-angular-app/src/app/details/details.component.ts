import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation/housinglocation';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, formatCurrency } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  // templateUrl: './details.component.html',
  template:`<article>
  <img class="listing-photo" [src]="housingLocation?.photo" alt="House"/>
  <section class="listing-description">
      <h2 class="lisitng-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
  </section>
  <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
          <li>Units Available : {{housingLocation?.availableUnits}}</li>
          <li>Does this Location has Wifi: {{housingLocation?.wifi ? "Yes" : "No"}}</li>
          <li>Does this Location has Laundry : {{housingLocation?.laundry ? "Yes" : "No"}}</li>
      </ul>
  </section>
  <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form  (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" formControlName="firstName" >
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" formControlName="lastName">
          <label for="email">Email</label>
          <input type="text" id="email" formControlName="email">
          <button type="submit" class="btn btn-primary">Apply Now</button>
      </form>
  </section>
</article>
`,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation!: HousingLocation | undefined;
  housingLocationId = -1;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(
      this.housingLocationId
    );
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
