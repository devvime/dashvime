import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/login/register/register';
import { Home } from './pages/home/home';
import { AuthGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
    { path: '', canActivate: [AuthGuard], component: Home },
    { path: 'login', component: Login },
    { path: 'login/register', component: Register }
];
