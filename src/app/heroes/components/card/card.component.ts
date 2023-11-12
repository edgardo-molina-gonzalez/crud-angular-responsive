import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    `
      span {
        color: #1560bd;
        font-weight: bold;
      }
    `,
  ],
})
export class CardComponent implements OnInit {
  @Input()
  hero!: Hero;

  ngOnInit(): void {
    if (!this.hero) {
      throw new Error('No existe el héroe');
    }
  }
}
