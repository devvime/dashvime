import { Component, EventEmitter, Output } from '@angular/core';
import { LoginSteps } from '../../login';

@Component({
  selector: 'app-register-step',
  imports: [],
  templateUrl: './register-step.html',
  styleUrl: './register-step.scss'
})
export class RegisterStep {

  @Output() currentStep = new EventEmitter<string>();

  goLogin() {
    this.currentStep.emit(LoginSteps.login);
  }
}
