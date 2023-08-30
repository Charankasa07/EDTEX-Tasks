import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService
      .getHeroById(id)
      .subscribe((hero) => (this.selectedHero = hero));
  }
  ngOnInit(): void {
    this.getHero();
  }
  goBack() {
    this.location.back();
  }
  save() {
    if (this.selectedHero) {
      this.heroService.updateHero(this.selectedHero).subscribe(()=>this.goBack());
    }
  }
}
