import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RegisterUserData } from '../../pages/login/steps/register-step/register-step';
import { http } from '../services/http';
import { ForgotPasswordData } from '../../pages/login/steps/forgot-password-step/forgot-password-step';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  async register(data: RegisterUserData) {
    http.url = environment.apiUrl;
    return await http.post('/auth/register', data);
  }

  async forgotPassword(data: ForgotPasswordData) {
    http.url = environment.apiUrl;
    return await http.post('/auth/forgotPassword', data);
  }
}
