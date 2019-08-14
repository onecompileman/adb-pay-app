import { NgModule } from '@angular/core';
import { EmployeeVerficationComponent } from './employee-verfication/employee-verfication';
import { PhoneNumberVerficationComponent } from './phone-number-verfication/phone-number-verfication';
import { CodeVerificationComponent } from './code-verification/code-verification';
import { IonicModule } from 'ionic-angular';
import { PasswordSetupComponent } from './password-setup/password-setup';
@NgModule({
    declarations: [EmployeeVerficationComponent,
        PhoneNumberVerficationComponent,
        CodeVerificationComponent,
    PasswordSetupComponent],
    imports: [IonicModule],
    exports: [EmployeeVerficationComponent,
        PhoneNumberVerficationComponent,
        CodeVerificationComponent,
    PasswordSetupComponent]
})
export class ComponentsModule { }
