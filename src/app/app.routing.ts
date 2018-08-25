import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: false });
