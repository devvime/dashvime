import { Component, EventEmitter, Output, output } from '@angular/core';
import { LoginSteps } from '../../login';

@Component({
  selector: 'app-login-step',
  imports: [],
  templateUrl: './login-step.html',
  styleUrl: './login-step.scss'
})
export class LoginStep {

  @Output() currentStep = new EventEmitter<string>();

  goToRegister() {
    this.currentStep.emit(LoginSteps.register);
  }

  goForgotPassword() {
    this.currentStep.emit(LoginSteps.forgotPassword);
  }
}
