import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RegisterUserData } from '../../pages/login/steps/register-step/register-step';
import { http } from '../services/http';

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
}
