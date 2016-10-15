import { Component, OnInit } from '@angular/core';
//ng-content would render any parts you place within app-another tags in another component
//however styling wise it will not follow 
@Component({
  selector: 'app-another',
  template:
    `<p>
    another works!
    <ng-content></ng-content>
    </p>`,
  styles: [`
    p {
      border: 1px solid black;
    }

    h1 {
      color: blue;
    }
  `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
