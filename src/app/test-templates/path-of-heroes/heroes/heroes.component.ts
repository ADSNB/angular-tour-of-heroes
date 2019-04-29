import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../models/hero';
import { Heroes } from '../../../mocks/mock-heroes';

// Metadata
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes = Heroes;

  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };

  constructor() { }

  ngOnInit() {  }
}
