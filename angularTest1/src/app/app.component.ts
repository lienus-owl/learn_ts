import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RightscreenComponent } from './rightscreen/rightscreen.component';
import { IMediatorImpl, Mediator, StateType } from './StateMediator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements IMediatorImpl, AfterViewInit {
  title = 'так себе приложуха на ангуляре';
  isSideNavVisible = true;

  @ViewChild(SidenavComponent)
  private sideNav: SidenavComponent | undefined;

  @ViewChild(RightscreenComponent)
  private rightScreen: RightscreenComponent | undefined;

  mediator: Mediator = new Mediator(this);

  ngAfterViewInit() {
    this.mediator.moveToState(StateType.MainPanelWithSideNav);
  }

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
    this.mediator.showHideSideNavClicked();

  }

  buttonClickedDetail() {
    // document.getElementById('myRightScreen')
    //     .style.transform = "translateX(0%)";
    // document.getElementById('main')
    //     .style.transform = "translateX(-100%)";
    this.mediator.moveToState(StateType.DetailPanel);
  }

  closeClicked() {
    document.getElementById('myRightScreen')!
      .style.transform = "translateX(100%)";
    document.getElementById('main')!
      .style.transform = "translateX(0%)";
  }

  onNotifyRightWindow(message: string): void {
    // alert('clicked');
    this.mediator.moveToState(
      this.mediator.getCurrentMainPanelState());
  }

  showNavPanel() {
    // @ts-ignore
    this.sideNav.showNav();
    document.getElementById('main')!.style.marginLeft = "300px";
  }
  hideNavPanel() {
    // @ts-ignore
    this.sideNav.closeNav();
    document.getElementById('main')!.style.marginLeft = "0px";
  }
  showDetailPanel() {
    // @ts-ignore
    this.rightScreen.openRightWindow();
    document.getElementById('main')!.style.transform = "translateX(-100%)";
  }
  hideDetailPanel() {
    // @ts-ignore
    this.rightScreen.closeRightWindow();
    document.getElementById('main')!.style.transform = "translateX(0%)";
  }
  changeShowHideSideButton(fromClass: string, toClass: string): any {
    if (fromClass.length > 0 && toClass.length > 0) {
      console.log(`change : from : ${fromClass}, ${toClass}`);
      document.getElementById('show-hide-side-button')!.classList.remove(fromClass);
      document.getElementById('show-hide-side-button')!.classList.add(toClass);
    }
  }
}
