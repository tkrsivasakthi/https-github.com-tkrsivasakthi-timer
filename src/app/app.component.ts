import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  takeOff: boolean = false; // to show takeoff message
  t: number = 30; // timer

  constructor() {
    this.reduceTime(this.t);
  }

  public reduceTime(t) {
    if (this.t == 0) {
      this.takeOff = true;
    }
  }
  //for reset coundown
  reset() {
    if (this.takeOff != true && this.t != 0) {
      this.t = 30;
      alert('count down reset done');
    } else {
      alert('not possible to reset');
    }
  }
}
