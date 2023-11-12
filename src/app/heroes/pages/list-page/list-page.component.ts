import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
    `
      .listado-heroes {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        margin-top: 1rem;
      }

      @media (min-width: 980px) {
        .listado-heroes {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 1rem;
        }
      }
    `,
  ],
})
export class ListPageComponent implements OnInit {
  constructor(private heroesService: HeroesService) {
    this.heroesService.getHero().subscribe((hero) => {
      this.heroes = hero;
      console.log(this.heroes);
    });
  }

  heroes: Hero[] = [];

  ngOnInit() {}
}
