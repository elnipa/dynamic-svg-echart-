import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { NgxEchartsModule, provideEcharts } from "ngx-echarts";
import { MapChartComponent } from "./app/map-chart/map-chart.component";
import { BackgroundSvgComponent } from "./app/background-svg/background-svg.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgxEchartsModule, MapChartComponent, BackgroundSvgComponent],
  template: `
    <h1>GEO/Map Chart with Custom SVG Background</h1>
    <app-map-chart></app-map-chart>
  `,
})
export class App {
  name = "Angular";
}

bootstrapApplication(App, {
  providers: [provideAnimations(), provideEcharts()],
});
