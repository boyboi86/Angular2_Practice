import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OthersComponent } from './others/others.component';
import { AnotherComponent } from './others/another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    OthersComponent,
    AnotherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
