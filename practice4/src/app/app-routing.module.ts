import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home-component.component';
import { UserComponent } from "./user/user.component";
import { childRoutes } from "./user/routes.component";

/*Arrange import of RouteModule then encapsulate within routes
  then export it so that it can be gone with the class duing export*/
const routes: Routes = [
  { path: 'user/:id', component: UserComponent},
  { path: 'user/:id', component: UserComponent, children: childRoutes},
  { path: 'user', redirectTo: 'user/10', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'user/9999', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Practice4RoutingModule { }
