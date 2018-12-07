import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleService } from '@/services';
import { Vehicle } from '@/models';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  public vehicles$: Observable<Vehicle[]>;
  public isuCoords: firebase.firestore.GeoPoint = new firebase.firestore.GeoPoint(42.027383, -93.646497);
  public iconUri = 'assets/bus.png';

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.getCoordinates();
  }

  getCoordinates() {
    this.vehicles$ = this.vehicleService.getAll();
  }

}
