import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../../shared/principal.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public principalService: PrincipalService,
    private snackBar: MatSnackBar,
    private router: Router,
    private principal: PrincipalService
  ) {}

  username = '';
  password = '';

  ngOnInit() {
    if (this.principal.user) {
      this.router.navigateByUrl('/');
    }
  }

  login() {
    this.principalService.login(this.username, this.password)
      .subscribe((token) => {
        this.router.navigateByUrl('/');
      }, () => {
        this.snackBar.open('登陆失败, 请重试');
      });
  }
}
