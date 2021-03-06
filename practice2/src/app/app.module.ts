import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { EventshighlightDirective } from './eventshighlight.directive';
import { InputhighlightDirective } from './inputhighlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    EventshighlightDirective,
    InputhighlightDirective,
    UnlessDirective
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
