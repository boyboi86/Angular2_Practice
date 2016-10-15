import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
<button (click)="onClicked()">click me !!</button>
  `,
  styles: []
})
export class EventBindingComponent {
/*Custom events require event emitter with output from core to run*/
  @Output() clicked = new EventEmitter<string>();
  onClicked(){
    this.clicked.emit('This is equipped with @output external binding')
  }

}
