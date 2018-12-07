import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FlatCoordinates } from 'src/app/models/flat-coordinates.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  public coordinates$: Observable<FlatCoordinates[]>;
  public isuCoords: FlatCoordinates = {
    latitude: 42.0149975,
    longitude: -93.6457346
  };

  constructor(
    private router: Router
  ) { }

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
