import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  title = 'AGM Project';

  public isuCoords = {
    latitude: 42.0149975,
    longitude: -93.6457346
  };

  constructor() { }

  ngOnInit() {
  }

}
