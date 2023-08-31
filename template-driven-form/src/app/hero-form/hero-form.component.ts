import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  hero: Hero = {
    id: 10,
    name: 'charan',
    power: this.powers[1],
    alterEgo: 'Chuck Overstreet',
  };
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.hero.alterEgo = this.hero.alterEgo?.length
      ? this.hero.alterEgo
      : 'No Alter Ego';
  }
  newHero() {
    this.hero = {
      id: 12,
      name: 'nivas',
      power: this.powers[0],
    };
    console.log(this.hero);
  }
}
