import { Component, OnInit } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { BackgroundSvgComponent } from '../background-svg/background-svg.component';

@Component({
  selector: 'app-map-chart',
  standalone: true,
  imports: [NgxEchartsModule, BackgroundSvgComponent],
  template: `
    <div class="chart-container">
      <app-background-svg></app-background-svg>
      <div echarts [options]="chartOption" class="demo-chart"></div>
    </div>
  `,
  styles: [`
    .chart-container {
      position: relative;
      width: 100%;
      height: 400px;
    }
    .demo-chart {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `]
})
export class MapChartComponent implements OnInit {
  chartOption: EChartsOption = {};

  ngOnInit() {
    this.chartOption = {
      backgroundColor: 'transparent',
      geo: {
        map: 'world',
        roam: true,
        itemStyle: {
          areaColor: '#4c60ff',
          borderColor: '#404a59'
        },
        emphasis: {
          itemStyle: {
            areaColor: '#2a333d'
          }
        }
      },
      series: [
        {
          name: 'Points',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: [
            { name: 'Point A', value: [120, 30, 100] },
            { name: 'Point B', value: [-100, 40, 80] },
            { name: 'Point C', value: [30, -20, 120] },
          ],
          symbolSize: 12,
          label: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          itemStyle: {
            color: '#ddb926'
          },
          emphasis: {
            label: {
              show: true
            }
          }
        }
      ]
    };
  }
}