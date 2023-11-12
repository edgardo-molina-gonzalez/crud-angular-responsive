import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [],
})
export class HeroPageComponent implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private activRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((heroes) => {
        console.log(heroes);
      });
  }
}
