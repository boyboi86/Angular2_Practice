import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputhighlight]'
})
export class InputhighlightDirective {
  /*If mouse enter div element change colors, listen to events and what to do*/
@HostListener('mouseenter') mouseover(){
  this.backgroundColor = this.ChangeColor;
  this.border = this.ChangeBorder;
}
  /*If mouse leave div element reverts colors*/
@HostListener('mouseleave') mouseleave(){
  this.backgroundColor = this.OriginalColor;
  this.border = this.OriginalBorder;
}

/*Binding basically emits actons*/
@HostBinding('style.backgroundColor') get setBackgroundColor(){
  return this.backgroundColor;
}
@HostBinding('style.border') get setBorder(){
  return this.border;
}
/*Dynamic way of property style binding,
 this is property binding but because it was used to listen to event it became a default*/
@Input() OriginalColor = 'blue';
@Input() ChangeColor = 'pink';
@Input() OriginalBorder = '5px solid pink';
@Input() ChangeBorder = '5px solid blue';
/*requires definition to state init values*/
private backgroundColor: string;
private border: string;
  constructor() { }
/*Always use life-cycle methods to ensure props are init upon render*/
ngOnInit(){
  this.backgroundColor = this.ChangeColor;
  this.border = this.ChangeBorder;
}

}
