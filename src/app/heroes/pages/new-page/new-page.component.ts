import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
    `
      h1 {
        text-align: center;
      }
      .pantalla-chica {
        display: grid;
        grid-template-columns: 1fr;
      }
      @media (min-width: 768px) {
        .pantalla-grande {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 2rem;
        }
      }
      .botones {
        display: flex;
        justify-content: space-between;
      }
      .espacio-card {
        margin-top: 2rem;
      }
    `,
  ],
})
export class NewPageComponent {
  publishers = [
    {
      id: 'DC',
      desc: 'dc-comics',
    },
    {
      id: 'Marvel',
      desc: 'marvel-comics',
    },
  ];

  formulario = new FormGroup({
    superHero: new FormControl(''),
    alterEgo: new FormControl(''),
    firstAp: new FormControl(''),
    personajes: new FormControl(''),
    creador: new FormControl(''),
  });

  submit() {
    console.log(this.formulario.value);
  }
}
