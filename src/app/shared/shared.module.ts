import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SareMenuComponent } from './components/sare-menu/sare-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SareMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SareMenuComponent
  ]
})
export class SharedModule { }
