import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-sare-menu',
  templateUrl: './sare-menu.component.html',
  styles: [
  ]
})
export class SareMenuComponent {

  public reactiveMenu : MenuItem[] = [
    {title : 'Basicos', route : './reactive/basic'},
    {title : 'Dinamicos', route : './reactive/dinamic'},
    {title : 'Switches', route : './reactive/switches'}
  ];

  public authMenu : MenuItem[] = [
    {title : 'Registro', route : './auth'},

  ];

}
