import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserEditComponent } from "./user/user-edit.component";
import { HomeComponent } from "./home-component.component";
import { Practice4RoutingModule } from './app-routing.module';
import { UserDetailGuard } from './user/user-detail.guard';
import { UserEditGuard } from './user/user-edit.guard';


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailComponent,
        UserEditComponent,
        HomeComponent
    ],
    imports: [BrowserModule, Practice4RoutingModule],
    providers: [UserDetailGuard, UserEditGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
