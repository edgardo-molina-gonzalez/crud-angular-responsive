import { Component, OnInit, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroes';

@Component({
  selector: 'app-hero-page',
  template: `
    <p>{{ hero.superhero }}</p>

    <ng-template #divLoading>
      <mat-grid-list cols="1">
        <mat-grid-tile>
          <mat-spinner></mat-spinner>
        </mat-grid-tile>
      </mat-grid-list>
    </ng-template>

    <div *ngIf="hero; else divLoading" class="grid p-2">
      <mat-card class="col-12 sm:col-6 ">
        <mat-card-header>
          <mat-card-title> {{ hero.alter_ego }} </mat-card-title>
          <mat-card-subtitle> {{ hero.superhero }} </mat-card-subtitle>
        </mat-card-header>

        <img [src]="hero | heroImage" [alt]="hero.superhero" mat-card-image />
      </mat-card>

      <mat-card class="col-12 sm:col-6">
        <mat-card-header>
          <mat-card-title> Información </mat-card-title>
          <mat-card-subtitle> {{ hero.superhero }} </mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <mat-list>
            <mat-list-item> {{ hero.first_appearance }} </mat-list-item>
            <mat-list-item> {{ hero.characters }} </mat-list-item>
            <mat-list-item> {{ hero.publisher }} </mat-list-item>
            <mat-list-item> {{ hero.alter_ego }} </mat-list-item>
          </mat-list>

          <button mat-button color="warn" (click)="goBack()">Regresar</button>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [],
})
export class HeroPageComponent implements OnInit {
  // constructor(
  //   private heroesService: HeroesService,
  //   private activRoute: ActivatedRoute
  // ) {}

  hero!: Hero;

  // ! Inyección sin uso del constructor()
  private heroesService = inject(HeroesService);
  private activRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    // active route perimite capturar el parametro de ruta del componente y hacer uso de el
    this.activRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['/heroes.list']);

        this.hero = hero;

        console.log(hero);

        return;
      });
  }

  goBack() {
    this.router.navigateByUrl('/heroes/list');
  }
}
