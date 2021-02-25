import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTest1';

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

}
