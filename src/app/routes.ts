import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { AuthGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
    { path: '', canActivate: [AuthGuard], component: Home },
    { path: 'login', component: Login }
];
