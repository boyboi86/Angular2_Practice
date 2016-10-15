import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
@Input() bindable = '1000';
@ViewChild('boundParagraph')
boundParagraph:HTMLElement;
/* from paren component to render into child ng-content use ContentChild*/
@ContentChild('globalParam')
globalParam:HTMLElement;

  constructor() { }

  ngOnChanges(){
    this.log('ngOnChange')
  }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngDoCheck(){
    this.log('ngDoCheck')
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit')
    console.log(this.globalParam);
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit')
    console.log(this.boundParagraph);
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy(){
    this.log('ngOnDestroy')
  }

  private log(hook: string){
    console.log(hook);
  }
}
