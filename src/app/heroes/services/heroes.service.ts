import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/heroes';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  private _baseUrl: string = 'http://localhost:3000';

  getHero(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this._baseUrl}/heroes`);
  }
  // ! como promesa
  // async getHeroes(): Promise<Hero[]> {
  //   const data = await fetch(`${this.baseUrl}/heroes`);
  //   const heroes = await data.json();
  //   return heroes;
  // }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http
      .get<Hero>(`${this._baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  // !como promesa
  // async gerHeroByIdProm(id: string): Promise<Hero | undefined> {
  //   try {
  //     const res = await fetch(`${this._baseUrl}/heroes/${id}`);
  //     const data = await res.json();
  //     return data;
  //   } catch {
  //     throw new Error(`Héroe indefinido`);
  //   }
  // }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this._baseUrl}/heroes?q=${query}&_limit=5`);
  }
}
