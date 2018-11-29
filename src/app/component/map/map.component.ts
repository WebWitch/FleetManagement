import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FlatCoordinates } from 'src/app/models/flat-coordinates.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  title = 'AGM Project';
  public coordinates$: Observable<FlatCoordinates[]>;
  public isuCoords: FlatCoordinates = {
    latitude: 42.0149975,
    longitude: -93.6457346
  };

  constructor() { }

  ngOnInit() {
    this.getCoordinates();
  }

  getCoordinates() {
    const coordinateMockArr: FlatCoordinates[] = [
      { latitude: 42.0149975, longitude: -93.6457346 },
      { latitude: 42.0149975, longitude: -93.6457346 },
      { latitude: 42.0149975, longitude: -93.6457346 },
      { latitude: 42.0149975, longitude: -93.6457346 },
      { latitude: 42.0149975, longitude: -93.6457346 }
    ];

    this.coordinates$ = of(coordinateMockArr);
  }

}
