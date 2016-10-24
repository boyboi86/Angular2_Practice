import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  myValue = "lowercase";
  myDate = new Date();
  myMoney = 200
  constructor() { }

}
