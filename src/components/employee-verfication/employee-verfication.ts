import { Component, Output, EventEmitter } from '@angular/core';
import { RegistrationStep } from '../../shared/enums/registration-step.enum';

@Component({
  selector: 'employee-verfication',
  templateUrl: 'employee-verfication.html'
})
export class EmployeeVerficationComponent {
  @Output() finished = new EventEmitter();

  constructor() {
  }

  nextStep() {
    this.finished.emit(RegistrationStep.PhoneVerification);
  }

}
