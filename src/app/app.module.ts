import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ExpenseModule} from './expense/expense.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExpenseModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
