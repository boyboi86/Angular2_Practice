import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>
      property-binding Works!
    </p>
    {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent {
@Input() result: number = 0;

  constructor() { }


}