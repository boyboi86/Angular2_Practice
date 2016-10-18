import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <!--For nested components slash before anything creates an absolute path-->
      <a [routerLink]="['/user']">User</a><br>
      <!--For nested components without slash it will become relative in this case Eg. '/user/user'
        but in this case there is no route path or compnent so clicking this will cause an error-->
      <h3>This route will give error, kindly look at source code </h3>
      <a [routerLink]="['user']">User</a><hr />
      <!--You can also use terminal conventions to navigate '../'-->
      <a [routerLink]="['../']" [queryParams]="{analytics: 500}">Home</a><br>
      <!--you can do this imperiative method to navigate-->
      <button (click)="onNavigate()" >Go Home</button>
      <br>
      User {{id}}
      <br>
      {{param}}
      <router-outlet></router-outlet>
    `
})
export class UserComponent implements OnDestroy {
  id: string;
  param: string;
  private subscription: Subscription;
  constructor(private router: Router, private AR: ActivatedRoute) {
    /*Snapshot will only update once when called will not change once init*/
    // this.id = AR.snapshot.params['id'];
    /*By accessing params directly routing will update whenever it needs to since it is an observable*/
    this.subscription = AR.params.subscribe(
      (params: any) => this.id = params['id']
    );

    this.subscription = AR.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );
  }
/*For imperative methods first will always be root directions, along with params if any
  Second arg is query which will be an object */
  onNavigate(){
    // this.router.navigate(['/']);
    this.router.navigate(['/'], {queryParams: { analytics: 100}})
  }
/*destroy observable to prevent memory leaks*/
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
