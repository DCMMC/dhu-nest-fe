import { finalize } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './shared/principal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '东华小窝';
  constructor(public principalService: PrincipalService) {}

  loading = true;

  ngOnInit() {
    this.principalService.getProfile()
      .pipe(
        finalize(() => {this.loading = false; }),
      )
      .subscribe();
  }

}
