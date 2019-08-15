import { Component, Output, EventEmitter } from '@angular/core';
import { RegistrationStep } from '../../shared/enums/registration-step.enum';

@Component({
  selector: 'phone-number-verfication',
  templateUrl: 'phone-number-verfication.html'
})
export class PhoneNumberVerficationComponent {

  @Output() finished = new EventEmitter();

  constructor() {
  }

  nextStep() {
    this.finished.emit(RegistrationStep.CodeVerification);
  }

}
