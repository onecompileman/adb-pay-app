import { Component, EventEmitter, Output } from '@angular/core';
import { RegistrationStep } from '../../shared/enums/registration-step.enum';

@Component({
  selector: 'password-setup',
  templateUrl: 'password-setup.html'
})
export class PasswordSetupComponent {

  @Output() finished = new EventEmitter();

  constructor() {
  }

  nextStep() {
    this.finished.emit(RegistrationStep.EndOfStep);
  }

}
