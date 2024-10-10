import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from "@angular/core";
import { NgxEchartsModule } from "ngx-echarts";
import { EChartsOption, registerMap } from "echarts";
import { BackgroundSvgComponent } from "../background-svg/background-svg.component";
import { myElements } from "../examples";

@Component({
  selector: "app-map-chart",
  standalone: true,
  imports: [NgxEchartsModule, BackgroundSvgComponent],
  template: `
    <div class="chart-container">
      <app-background-svg
        #backgroundSvg
        [hidden]="true"
        [elements]="myElements"
      />
      <!-- <app-background-svg
        #backgroundSvg
        [elements]="myElements"
      /> -->
      <div echarts [options]="chartOption" class="demo-chart"></div>
    </div>
  `,
  styles: [
    `
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
    `,
  ],
})
export class MapChartComponent implements OnInit, AfterViewInit {
  @ViewChild("backgroundSvg", { read: ElementRef }) backgroundSvg!: ElementRef;

  readonly myElements = myElements;

  chartOption: EChartsOption = {};

  ngOnInit() {
    // Initial chart options setup
    this.setupChartOptions();
  }

  ngAfterViewInit() {
    // Update chart options with the dynamically generated SVG
    setTimeout(() => {
      this.registerCustomMap();
    });
  }

  setupChartOptions() {
    this.chartOption = {
      geo: {
        map: "customSvgMap",
        roam: true,
        itemStyle: {
          areaColor: "rgba(76, 96, 255, 0.3)",
          borderColor: "#404a59",
        },
        emphasis: {
          itemStyle: {
            areaColor: "rgba(42, 51, 61, 0.5)",
          },
        },
      },
      series: [
        {
          name: "Points",
          type: "scatter",
          coordinateSystem: "geo",
          data: [
            { name: "Point A", value: [120, 30, 100] },
            { name: "Point B", value: [-100, 40, 80] },
            { name: "Point C", value: [30, -20, 120] },
          ],
          symbolSize: 12,
          label: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
          itemStyle: {
            color: "#ddb926",
          },
          emphasis: {
            label: {
              show: true,
            },
          },
        },
      ],
    };
  }

  registerCustomMap() {
    const svgString = this.backgroundSvg.nativeElement.innerHTML;
    console.log(svgString);

    // registerMap("customSvgMap", {
    //   svg: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`,
    // });
    registerMap("customSvgMap", { svg: svgString });

    // Force chart update
    this.chartOption = { ...this.chartOption };
  }

  updateChartBackground() {
    const svgString = this.backgroundSvg.nativeElement.innerHTML;
    console.log(svgString);

    this.chartOption = {
      ...this.chartOption,
      backgroundColor: {
        type: "pattern",
        image: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
          svgString
        )}`,
        repeat: "no-repeat",
      },
    };
  }
}
