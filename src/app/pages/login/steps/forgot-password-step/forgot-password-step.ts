import { Component, EventEmitter, inject, Output } from '@angular/core';
import { LoginSteps } from '../../login';
import { AuthService } from '../../../../shared/services/auth-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface ForgotPasswordData {
  email: string;
}

@Component({
  selector: 'app-forgot-password-step',
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password-step.html',
  styleUrl: './forgot-password-step.scss'
})
export class ForgotPasswordStep {

  @Output() currentStep = new EventEmitter<string>();

  protected readonly fb = inject(FormBuilder);
  protected readonly authService = inject(AuthService);

  public loading = false;
  public form = this.fb.group({
    email: ['', Validators.required]
  });
  public errors = {
    email: false
  }

  async submit() {
    if (!this.validate()) return;
    this.loading = true;
  }

  validate(): boolean {
    if (this.form.value.email === '') {
      this.errors.email = true;
      return false;
    }
    this.errors.email = false;
    return true;
  }

  goLogin() {
    this.currentStep.emit(LoginSteps.login);
  }

}
