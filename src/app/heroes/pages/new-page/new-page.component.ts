import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private activRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activRoute.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroById(id))
    );
  }
}
