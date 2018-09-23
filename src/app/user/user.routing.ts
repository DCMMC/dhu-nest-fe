import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'user',
    children: [{
      path: 'login',
      component: LoginComponent,
    }, {
      path: '',
      component: UserComponent,
    }]
  },
];

export const UserRoutes = RouterModule.forChild(routes);
