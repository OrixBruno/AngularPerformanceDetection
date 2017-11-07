import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ValoresService } from "./services/valores.service";


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ValoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
