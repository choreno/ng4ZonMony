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



  public gauge_ChartData = [
    ['Label', 'Value'],
    ['$$$', 120],
    // ['Diastolic', 80]
  ];

  public gauge_ChartOptions = {

    width: 100, height: 90,
    redFrom: 90, redTo: 100,
    yellowFrom: 75, yellowTo: 90,
    minorTicks: 2
  };






  public line_ChartData = [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]];

  public line_ChartOptions = {
    title: 'Company Performance',
    curveType: 'function',
    height: 90
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
    height: 90
  };


  //ChartJs

//line
  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: 'yellow',
    borderColor:'white',
    fill: false
  };

  public lineChartLabels: string[] = ['2009', '2010', '2011', '2012', '2013','2014','2015','2016','2017'];
  public lineChartType: string = 'line';
  public lineChartLegend: boolean = false;

  public lineChartData: any[] = [
    { data: [15736.24, 46103.28, 65311.89, 66901.06, 57070.77, 60700.45, 65180.22, 74576.48, 47264.65], 
      label:'data', 
      fill:false, 
      
      
    },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public chartColors: any[] = [
    { 
      borderColor:'yellow'
    }];


// bar 

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = ['2009', '2010', '2011', '2012', '2013','2014','2015','2016','2017'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [15736.24, 46103.28, 65311.89, 66901.06, 57070.77, 60700.45, 65180.22, 74576.48, 47264.65], label: 'Year Expenses' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }




  // Doughnut
  public doughnutChartLabels: string[] = ['Housing', 'Credit Card', 'Utility'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';
  public doughnutOptions: any = {
    
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    legend:
            {

              labels:   {
                          fontColor: 'white',
                          fontSize: 16,
                        },

              position: 'right'

            }


  };





}
