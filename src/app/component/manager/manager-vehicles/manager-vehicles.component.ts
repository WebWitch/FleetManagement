import { Component, OnInit, Input } from '@angular/core';
import { Manager } from '../../../models/manager.model';
import { ManagerService } from '../../../service/manager.service';
import { LoggerService } from '../../../service/logger.service';
import { ShadowVehicle } from '../../../models/shadow-vehicle.model';

@Component({
  selector: 'app-manager-vehicles',
  templateUrl: './manager-vehicles.component.html',
  styleUrls: ['./manager-vehicles.component.less']
})
export class ManagerVehiclesComponent implements OnInit {
  @Input() vehicles: ShadowVehicle[];

  constructor() {
  }

  ngOnInit() {
  }
}
