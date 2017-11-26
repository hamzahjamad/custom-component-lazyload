import { Component } from '@angular/core';

/**
 * Generated class for the AppNameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-name',
  templateUrl: 'app-name.html'
})
export class AppNameComponent {

  text: string;

  constructor() {
    console.log('Hello AppNameComponent Component');
    this.text = 'Hello World';
  }

}
