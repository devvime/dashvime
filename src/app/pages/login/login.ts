import { Component } from '@angular/core';
import { LoginStep } from './steps/login-step/login-step';
import { RegisterStep } from './steps/register-step/register-step';
import { ForgotPasswordStep } from './steps/forgot-password-step/forgot-password-step';

export enum LoginSteps {
  login = 'login',
  register = 'register',
  forgotPassword = 'forgotPassword'
};

@Component({
  selector: 'app-login',
  imports: [LoginStep, RegisterStep, ForgotPasswordStep],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  public steps = LoginSteps;
  public currentStep = LoginSteps.login;

  getCurrentStep(event: any) {
    this.currentStep = event;
  }
}
