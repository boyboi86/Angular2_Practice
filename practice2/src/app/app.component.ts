import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private value = 10;
  private items = [1, 2, 3, 4, 5];
  private switch = true;
  /*Basically set to false*/
    onSwitch(){
      this.switch = !this.switch;
    }
}
