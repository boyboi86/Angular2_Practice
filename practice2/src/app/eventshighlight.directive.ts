import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEventshighlight]'
})
export class EventshighlightDirective {
  /*If mouse enter div element change colors, listen to events and what to do*/
@HostListener('mouseenter') mouseover(){
  this.backgroundColor = 'pink';
  this.border = '5px solid blue';
}
  /*If mouse leave div element reverts colors*/
@HostListener('mouseleave') mouseleave(){
  this.backgroundColor = 'blue';
  this.border = '5px solid pink';
}

/*Binding basically emits actons*/
@HostBinding('style.backgroundColor') get setColor(){
  return this.backgroundColor;
}
@HostBinding('style.border') get setstyle(){
  return this.border;
}
/*requires definition to state init values*/
private backgroundColor = 'blue';
private border = '5px solid pink';
  constructor() { }

}
