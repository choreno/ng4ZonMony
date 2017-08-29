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



  showThis(){
    console.log('hh'); 
  }






  public line_ChartData = [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]];

  public line_ChartOptions = {
    title: 'Company Performance',
    curveType: 'function',
    // legend: {
    //   position: 'bottom',
    //   textStyle:{
    //   color:"#ffffff"
    // },
    // },

    // //  colors: ['#a52714', '#0000ff', '#ff0000', '#00ff00']
    // textStyle:{
    //   color:"#ffffff"
    // },
    //   backgroundColor: '#000000',
    // hAxis: {
    //   textStyle: {
    //     color: "#ffffff"
    //   },
    //   gridlines: {
    //     color: "#FFFFFF"
    //   },
    //   baselineColor: '#FFFFFF'
    // },
    // vAxis:{
    //   textStyle: {
    //     color: "#ffffff"
    //   },
    //   gridlines: {
    //     color: "#FFFFFF"
    //   },
    //   baselineColor: '#FFFFFF'
    // }
  };

  public scatter_ChartData = [
    ['Date', 'Sales Percentage'],
    [new Date(2016, 3, 22), 78],
    [new Date(2016, 3, 21, 9, 30, 2), 88],
    [new Date(2016, 3, 20), 67],
    [new Date(2016, 3, 19, 8, 34, 7), 98],
    [new Date(2016, 3, 18, 15, 34, 7), 95],
    [new Date(2016, 3, 16, 7, 30, 45), 89],
    [new Date(2016, 3, 16, 15, 40, 35), 68]
  ];


  public scatter_ChartOptions = {
    legend: {
      position: 'bottom'
    },
    title: 'Company Sales Percentage'
  };



  public pie_ChartData = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]];

  public pie_ChartOptions = {
    title: 'My Daily Activities',
    // width: 200,
    // height: 200
  };


}
