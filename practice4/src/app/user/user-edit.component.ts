import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from './user-edit.guard';

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <p>Nothin much to edit, but just to let you know this is a children route</p>
        <button class="btn btn-alert" (click)="onNavigate()">Home</button>
        <button (click)="done = true">Done</button>
    `
})
export class UserEditComponent implements ComponentCanDeactivate {
  done = false;
  constructor(private router: Router){}

  onNavigate(){
    this.router.navigate(['/']);
  }

  canDeactivate(): boolean {
    if(!this.done){
      return confirm('do you want to navigate away?')
    }
    return true;
  }
}
