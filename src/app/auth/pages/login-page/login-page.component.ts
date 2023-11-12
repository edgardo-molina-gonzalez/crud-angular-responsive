import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
    `
      h2 {
        text-align: center;
      }
      .link {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
      }
      .form > section {
        display: grid;
        width: 50%;
        margin: 0 auto;
      }
      .link > a {
        text-decoration: none;
      }
      button {
        width: 100%;
      }
    `,
  ],
})
export class LoginPageComponent {}
