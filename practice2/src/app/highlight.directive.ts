import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer){
    /*The blocked out code can be used but not a preferred method since it directly access native element
      causing vulnerable to XSS attacks*/
    // this.elementRef.nativeElement.style.backgroundColor = 'blue';
    // this.elementRef.nativeElement.style.border = '5px solid pink';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'border', '5px solid pink');
  }
}
