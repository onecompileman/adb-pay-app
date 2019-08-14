import { Component, Output, EventEmitter } from '@angular/core';
import { RegistrationStep } from '../../shared/enums/registration-step.enum';

@Component({
  selector: 'code-verification',
  templateUrl: 'code-verification.html'
})
export class CodeVerificationComponent {

  @Output() finished = new EventEmitter();

  constructor() {
  }

  nextStep() {
    this.finished.emit(RegistrationStep.PasswordSetup);
  }

}
