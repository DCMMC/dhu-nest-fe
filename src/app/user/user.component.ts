import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../shared/principal.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private principal: PrincipalService) { }

  user = this.principal.user;

  ngOnInit() {
  }

}
