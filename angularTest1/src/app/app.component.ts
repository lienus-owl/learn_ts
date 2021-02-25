import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RightscreenComponent } from './rightscreen/rightscreen.component';
import { DetailPanel, MainPanelOnly, MainPanelWithSideNav } from './stateMediator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements IMediatorImpl{
  title = 'angularTest1';

  @ViewChild(SidenavComponent) 
  private sideNav: SidenavComponent;
  @ViewChild(RightscreenComponent) 
  private rightScreen: RightscreenComponent;

  

  isSideNavVisible = true;
  showHideSideClicked() {
    if (this.isSideNavVisible) {
      document.getElementById('main')!.style.marginLeft = "0px";
      document.getElementById('mySidenav')!.style.width = "0px";
      this.isSideNavVisible = false;
    } else {
      document.getElementById('main')!.style.marginLeft = "300px";
      document.getElementById('mySidenav')!.style.width = "300px";
      this.isSideNavVisible = true;
    }
  }

  buttonClickerDetail() {
    document.getElementById('myRightScreen')!.style.transform = "translateX(0%)";
    document.getElementById('main')!.style.transform = "translateX(-100%)";
  }

  closeClicked() {
    document.getElementById('myRightScreen')!.style.transform = "translateX(100%)";
    document.getElementById('main')!.style.transform = "translateX(0%)";
  }

  onNotifyRightWindow(message: string): void {
    alert('clicked');
  }

  showNavPanel() {
    this.sideNav.showNav();
    document.getElementById('main')?.style.marginLeft === '300px;'
  }

  hideNavPanel() {
    this.sideNav.closeNav();
    document.getElementById('main')?.style.marginLeft === '0px';
  }

  showDetailPanel() {
    this.rightScreen.openRightWindow();
    document.getElementById('main')?.style.transform === 'translate(100%)';
  }

  hideDetailPanel() {
    this.rightScreen.closeRigthWindow();
    document.getElementById('main')?.style.transform === 'translate(0%)';
  }

  changeShowHideSideButton(fromClass: string, toClass: string) {
    if (fromClass.length > 0 && toClass.length > 0) {
      document.getElementById('show-hide-side-button')?.classList.remove(fromClass);
      document.getElementById('show-hide-side-button')?.classList.add(fromClass);
    }
  }

}


