import { Component, OnInit, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/heroes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
    `
      span {
        color: red;
      }
      section {
        display: grid;
        grid-template-columns: 1fr;
      }
    `,
  ],
})
export class SearchPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private buscarPorTermino = inject(HeroesService);

  termino = new FormControl('');
  heroes: Hero[] = [];
  selectedHero?: Hero;

  searchHero() {
    const value: string = this.termino.value || '';
    this.buscarPorTermino
      .getSuggestions(value)
      .subscribe((hero) => (this.heroes = hero));
    console.log(value);
  }

  selectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.termino.setValue(hero.superhero);
    this.selectedHero = hero;
  }
}
