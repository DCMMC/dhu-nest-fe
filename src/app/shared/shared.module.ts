import { PrincipalService } from './principal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PrincipalService],
  declarations: [SharedComponent]
})
export class SharedModule { }
