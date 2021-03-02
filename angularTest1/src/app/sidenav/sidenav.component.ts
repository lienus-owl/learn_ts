import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {

  closeNav() {
    document.getElementById('mySidenav')?.style.width === "0px";
  }

  showNav() {
    document.getElementById('mySidenav')?.style.width === '300px';
  }
}
