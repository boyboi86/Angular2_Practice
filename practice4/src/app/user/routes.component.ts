import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UserEditComponent } from './user-edit.component';

export const childRoutes: Routes = [
  { path: 'edit', component: UserEditComponent},
  { path: 'detail', component: UserDetailComponent}
];
