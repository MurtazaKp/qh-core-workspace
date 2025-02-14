import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QhButtonModule } from "../../projects/qh-core/src/lib/qh-button/qh-button.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QhButtonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
