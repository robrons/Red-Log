import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
@Component({
  selector: 'app-colaptable',
  templateUrl: './colaptable.component.html',
  styleUrls: ['./colaptable.component.css']
})
export class ColaptableComponent implements OnInit {
  hero: Hero = {
    id: 1, 
    name: 'Windstrorm'
  };

  heroes = HEROES;

  selectedHero: Hero;

  constructor() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 
  ngOnInit() {
  }

}
