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
    elements: {
      point: {
        radius: 5
      }
    },
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
        fontSize: 12,
        //backdropColor: 'red',
        stepSize: 2000,
        beginAtZero: false,
        // min: 1,
        // max: 5
      },
      pointLabels: {
        fontSize: 18,
        //fontColor: 'green'
      },
    },
  };





  //google chart
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

  // bar 

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];
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

      labels: {
        fontColor: 'white',
        fontSize: 16,
      },

      position: 'right'

    }


  };





}
