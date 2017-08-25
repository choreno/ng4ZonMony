import { Component, OnInit } from '@angular/core';
import { IExpense } from "../inteface/expense";
import { ExpenseService } from '../service/expense.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  expenses: IExpense[];

  constructor(private _expenseService: ExpenseService) { }


  ngOnInit() {

    this._expenseService.getAllExpenses()
      .subscribe(
      x => this.expenses = x,
      err => console.log(err),
      () => console.log('expense data loaded successfully')
      )

  }


}
