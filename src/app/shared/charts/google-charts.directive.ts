import { Directive, ElementRef, Input, OnInit } from '@angular/core';
declare const google: any;
declare let  googleLoaded: any;

@Directive({
  selector: '[GoogleChart]'
})

export class GoogleChartsDirective implements OnInit {

  
  @Input('chartType') 
  private chartType: string;
  
  @Input('chartOptions') 
  private chartOptions: Object;
  
  @Input('chartData') 
  private chartData: Object;

  constructor(private _element: ElementRef) {
  }

  ngOnInit() {

    google.charts.load('current', { 'packages': ['corechart'] });
    this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element.nativeElement) ;
   
    // setTimeout(() =>{
    //   google.charts.load('current', {'packages':['corechart']});
    //
    //     setTimeout(() =>{
    //       this.drawGraph(this.chartOptions,this.chartType,this.chartData,this._element)
    //     },1000);
    //   },1000
    // );

  }
  
  drawGraph(chartOptions, chartType, chartData, ele) {
    
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var wrapper;
      wrapper = new google.visualization.ChartWrapper({
        chartType: chartType,
        dataTable: chartData,
        options: chartOptions || {},
        containerId: ele.id
      });
      wrapper.draw();
    }
  }

}
