import { Component, EventEmitter, Output } from '@angular/core';
import { LoginSteps } from '../../login';

@Component({
  selector: 'app-forgot-password-step',
  imports: [],
  templateUrl: './forgot-password-step.html',
  styleUrl: './forgot-password-step.scss'
})
export class ForgotPasswordStep {

  @Output() currentStep = new EventEmitter<string>();

  goLogin() {
    this.currentStep.emit(LoginSteps.login);
  }

}
