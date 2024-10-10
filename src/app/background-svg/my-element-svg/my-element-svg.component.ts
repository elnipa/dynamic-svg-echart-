import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  input,
} from "@angular/core";
import { MyElement } from "../my-element.model";
import { GeoJSON2SVG } from "geojson2svg";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "svg:g[my-element]",
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host { 
        display: contents
    }
  `,
  host: {
    "[innerHTML]": "mySvg()",
  },
})
export class MyElementSvgComponent {
  element = input.required<MyElement>();
  private sanitizer = inject(DomSanitizer);

  converter = new GeoJSON2SVG({
    mapExtent: { left: -180, bottom: -90, right: 180, top: 90 },
    viewportSize: { width: 1000, height: 1000 },
    // attributes: ["properties.class", "properties.foo"],
    r: 2,
  });

  myGeoJson = computed<GeoJSON.GeoJSON | GeoJSON.GeometryCollection>(
    () => this.element().myGeoJson
  );

  mySvg = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(
      this.converter.convert(this.myGeoJson()).join("")
    )
  );
}
