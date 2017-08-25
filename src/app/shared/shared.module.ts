import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleChartsDirective} from './chart/google-charts.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoogleChartsDirective,

  ],
  exports: [
    CommonModule,
    GoogleChartsDirective,

  ]
})
export class SharedModule { }
