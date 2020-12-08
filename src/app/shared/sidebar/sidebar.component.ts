import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../shared-services/sidebar.service';
import { Menu } from '../../interfaces/sidebarMenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  menuItems: Menu[];

  constructor(private sidebar: SidebarService) {
    this.menuItems = sidebar.getMenu();
  }

  ngOnInit() {
  }

}
