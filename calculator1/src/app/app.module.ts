import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TextField1Component } from './text-field1/text-field1.component';
import { TextField2Component } from './text-field2/text-field2.component';
import { TextField3Component } from './text-field3/text-field3.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonSubComponent } from './button-sub/button-sub.component';


@NgModule({
  declarations: [
    AppComponent,
    TextField1Component,
    TextField2Component,
    TextField3Component,
    ButtonAddComponent,
    ButtonSubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
