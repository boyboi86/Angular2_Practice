import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UserEditComponent } from './user-edit.component';
import { UserDetailGuard } from './user-detail.guard';
import { UserEditGuard } from './user-edit.guard';

export const childRoutes: Routes = [
  { path: 'edit', component: UserEditComponent, canActivate: [UserDetailGuard]},
  { path: 'detail', component: UserDetailComponent, canDeactivate: [UserEditGuard]}
];
