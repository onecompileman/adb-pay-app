import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'phone-number-verfication',
  templateUrl: 'phone-number-verfication.html'
})
export class PhoneNumberVerficationComponent {

  @Output() finished = new EventEmitter();

  constructor() {
  }

  nextStep() {
    this.finished.emit(3);
  }

}
