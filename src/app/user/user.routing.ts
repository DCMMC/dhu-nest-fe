import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    children: [{
      path: 'login',
      component: LoginComponent,
    }]
  },
];

export const UserRoutes = RouterModule.forChild(routes);
