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



  showThis() {
    console.log('hh');
  }


  //ChartJs

  //line
  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false

  };

  public lineChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChartType: string = 'line';
  public lineChartLegend: boolean = true;

  public lineChartData: any[] = [
    {
      data: [6184.19, 5041.66, 4835.30, 4638.93, 7055.07, 4705.52, 5358.42, 7059.41, 5052.10, 4758.28, 5319.89, 5171.45],
      label: '2015',
    },
    {
      data: [3428.81, 7696.98, 5375.20, 5392.01, 7599.96, 8293.00, 4700.97, 7574.79, 6343.58, 6302.96, 5054.39, 6813.83],
      label: '2016',
    },
    {
      data: [5884.31, 5272.14, 5576.19, 4919.60, 5791.30, 4733.40, 8598.63, 4783.06, 1706.02, 0.00, 0.00, 0.00],
      label: '2017',
    },
  ];

  public chartColors: any[] = [
    {
      borderColor: 'yellow'
    }];



  //radar

  public radarChartLabels: string[] = ['Housing', 'Credit Card', 'Utility', 'Tax', 'Car', 'Medical', 'etc'];
  public radarChartType: string = 'radar';
  public radarChartLegend: boolean = true;
  public radarChartData: any[] = [
    {
      data: [6184.19, 5041.66, 4835.30, 4638.93, 7055.07, 4705.52, 1000],
      label: '2015',

    },
    {
      data: [3428.81, 7696.98, 5375.20, 5392.01, 7599.96, 8293.00, 1200],
      label: '2016',

    },
    {
      data: [5884.31, 5272.14, 5576.19, 4919.60, 5791.30, 4733.40, 5000],
      label: '2017',

    },
  ];

  public radarChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    maintainAspectRatio: false,
    // elements: {
    //   point: {
    //     radius: 5
    //   }
    // }, 
    scale: {
      //reverse: false,
      // angleLines:
      // {
      //   lineWidth: 10
      // },
      // gridLines: {
      //   color: ['orange']
      // },
      ticks: {
        display: true,
        fontSize: 10,
        //backdropColor: 'red',
        stepSize: 2000,
        beginAtZero: false,
        // min: 1,
        // max: 5
      },
      pointLabels: {
        fontSize: 16,
        //fontColor: 'green'
      },
    },
  };








}
