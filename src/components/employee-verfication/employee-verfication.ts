import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'employee-verfication',
  templateUrl: 'employee-verfication.html'
})
export class EmployeeVerficationComponent {
  @Output() finished = new EventEmitter();

  constructor() {
  }

  nextStep() {
    this.finished.emit(2);
  }

}
