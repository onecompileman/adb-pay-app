import { Component } from '@angular/core';

/**
 * Generated class for the PasswordSetupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'password-setup',
  templateUrl: 'password-setup.html'
})
export class PasswordSetupComponent {

  text: string;

  constructor() {
    console.log('Hello PasswordSetupComponent Component');
    this.text = 'Hello World';
  }

}
