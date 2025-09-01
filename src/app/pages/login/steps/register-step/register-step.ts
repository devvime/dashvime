import { Component, EventEmitter, inject, Output } from '@angular/core';
import { LoginSteps } from '../../login';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth-service';
import Swal from 'sweetalert2';
import { Loading } from '../../../../shared/components/loading/loading';

export interface RegisterUserData {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register-step',
  imports: [ReactiveFormsModule, Loading],
  templateUrl: './register-step.html',
  styleUrl: './register-step.scss'
})
export class RegisterStep {

  @Output() currentStep = new EventEmitter<string>();

  protected readonly fb = inject(FormBuilder);
  protected readonly authService = inject(AuthService);

  public form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  public loading = false;

  async submit() {
    this.loading = true;
    const data = this.form.value as RegisterUserData;
    const response = await this.authService.register(data);
    if (response.error) {
      Swal.fire({
        icon: 'error',
        title: 'Ops!',
        text: response.message
      });
      this.loading = false;
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'User registered succesfull!',
      text: 'Access your email and active your account.'
    });
    this.loading = false;
  }

  goLogin() {
    this.currentStep.emit(LoginSteps.login);
  }
}
