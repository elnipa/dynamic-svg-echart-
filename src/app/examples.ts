import { MyElement } from "./background-svg/my-element.model";

// Example of MyElement array
export const myElements: MyElement[] = [
  {
    name: "Single Point Location",
    myGeoJson: {
      type: "Point",
      coordinates: [102.0, 0.5], // A point in GeoJSON format
    },
  },
  {
    name: "A Line across Two Cities",
    myGeoJson: {
      type: "LineString",
      coordinates: [
        [12.4924, 41.8902], // Rome, Italy
        [-0.1276, 51.5074], // London, UK
      ],
    },
  },
  {
    name: "Park Area",
    myGeoJson: {
      type: "Polygon",
      coordinates: [
        [
          [12.492, 41.8895], // Polygon defining a park area
          [12.493, 41.8895],
          [12.493, 41.8905],
          [12.492, 41.8905],
          [12.492, 41.8895],
        ],
      ],
    },
  },
  {
    name: "Mountain Peaks",
    myGeoJson: {
      type: "MultiPoint",
      coordinates: [
        [-106.65, 35.0844], // First mountain peak
        [-105.9378, 35.687], // Second mountain peak
      ],
    },
  },
  {
    name: "Cities Feature Collection",
    myGeoJson: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [12.4924, 41.8902], // Rome, Italy
          },
          properties: {
            name: "Rome",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-0.1276, 51.5074], // London, UK
          },
          properties: {
            name: "London",
          },
        },
      ],
    },
  },
];
