import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rightscreen-component',
  templateUrl: './rightscreen.component.html',
  styleUrls: ['./rightscreen.component.scss']
})
export class RightscreenComponent{

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  closeClicked() {
    this.notify.emit('Клик из вложенного компонента');
  }

  closeRightWindow() {
    document.getElementById('myRightScreen')?.style.transform === "translateX(100%)";
  }

  openRightWindow() {
    document.getElementById('myRightScreen')?.style.transform === "translateX(0%)";
  }

}
