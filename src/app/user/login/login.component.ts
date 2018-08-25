import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../../shared/principal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public principalService: PrincipalService) {}

  username = '';
  password = '';

  ngOnInit() {
  }

  login() {
    this.principalService.login(this.username, this.password)
      .subscribe((token) => {
        console.log(token);
      });
  }
}
