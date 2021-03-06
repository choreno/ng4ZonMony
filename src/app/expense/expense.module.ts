import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ExpenseDb } from './data-access/expense.db';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';

import { ExpenseService } from './service/expense.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(ExpenseDb),
    ChartsModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    ExpenseService
  ]

})
export class ExpenseModule { }
