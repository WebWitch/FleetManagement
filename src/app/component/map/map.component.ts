import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FlatCoordinates } from 'src/app/models/flat-coordinates.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  title = 'AGM Project';
  public coordinates$: FlatCoordinates[];
  public isuCoords: FlatCoordinates = {
    latitude: 42.0149975,
    longitude: -93.6457346
  };

  constructor() { }

  ngOnInit() {
  }

  getCoordinates() {
    const coordinateMockArr: FlatCoordinates[] = [
      { latitude: 42.0149975, longitude: -93.6457346 },
      { latitude: 42.0149975, longitude: -93.6457346 },
      { latitude: 42.0149975, longitude: -93.6457346 },
      { latitude: 42.0149975, longitude: -93.6457346 },
      { latitude: 42.0149975, longitude: -93.6457346 }
    ];

    of(coordinateMockArr).subscribe(coords => {
      this.coordinates$ = coords;
    });
  }

}
