import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  styleUrls: [ './heroes.component.css' ],
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
	
	
	selectedHero: Hero;
	heroes: Hero[];

	constructor(
		private heroService: HeroService,
		private router: Router
	){};
	
	getHeroes(): void {
		//async
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
		
		//sync
		//this.heroes = this.heroService.getHeroes();

	}

	ngOnInit(): void {
		this.getHeroes();
	}
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	gotoDetail(): void {
		console.log('gotoDetail');
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
	
	
}
