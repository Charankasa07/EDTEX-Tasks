import { Component, inject, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes : Hero[]=[];
  heroService : HeroService = inject(HeroService)

  getHeroes(){
    this.heroService.getHeroes().subscribe((data)=>{this.heroes = data.slice(1,5)})
  }
  
  ngOnInit(): void {
      this.getHeroes()
  }
}  
