import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/sidebarMenu';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  public getMenu(): Menu[] {
    return  [
      {
        icon: "mdi mdi-gauge",
        title: "Dashboard",
        submenu: [
          { title: "Principal", url: "/" },
          { title: "Barra Progreso", url: "progess" },
          { title: "Graficas", url: "grafica1" },
        ]
      }
    ];
  }
}
