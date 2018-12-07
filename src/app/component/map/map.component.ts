import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FlatCoordinates } from 'src/app/models/flat-coordinates.model';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/service/vehicle.service';
import { Vehicle } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  public vehicles$: Observable<Vehicle[]>;
  public isuCoords: FlatCoordinates = {
    latitude: 42.027383,
    longitude: -93.646497
  };
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
