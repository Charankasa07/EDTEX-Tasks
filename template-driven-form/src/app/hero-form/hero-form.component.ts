import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  hero : Hero = new Hero(10,"charan",this.powers[0],'Chuck Overstreet')
  submitted = false;
  onSubmit(){
    this.submitted = true
    console.log(this.submitted);
  }
  newHero(){
    this.hero = new Hero(12,"Nivas",this.powers[1],'Super Hot')
    console.log(this.submitted);
  }
}
