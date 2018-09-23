import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatTabsModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from '../../modules/avatar/avatar.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutes,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AvatarModule,
    MatCardModule,
    MatTabsModule,
  ],
  providers: [],
  declarations: [UserComponent, LoginComponent],
  exports: []
})
export class UserModule { }
