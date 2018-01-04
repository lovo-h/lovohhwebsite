import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isNavbarMenuCollapsed: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isNavbarMenuCollapsed = true;
  }

  collapseNavbarMenu() {
    this.isNavbarMenuCollapsed = !this.isNavbarMenuCollapsed;
  }

}
