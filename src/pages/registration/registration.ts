import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationStep } from '../../shared/enums/registration-step.enum';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  currentStep;
  registrationStep;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.registrationStep = RegistrationStep;
    this.currentStep = this.registrationStep.EmployeeVerification;
  }

  

}
