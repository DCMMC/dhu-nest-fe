import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../../shared/principal.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private principalService: PrincipalService) {}

  get auth() {
    return this.principalService.user !== null;
  }

  get user() {
    return this.principalService.user;
  }

  ngOnInit() {
  }

}
