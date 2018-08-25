import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { AuthInterceptor } from './block/AuthInterceptor';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatMenuModule, MatButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UserModule,
    AppRoutes,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
