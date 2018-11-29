import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagerService } from 'src/app/service/manager.service';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-raw-data-report',
  templateUrl: './raw-data-report.component.html',
  styleUrls: ['./raw-data-report.component.less']
})
export class RawDataReportComponent implements OnInit {

  public managerData$: Observable<any[]>;
  public vehicleData$: Observable<any[]>;

  constructor(
    private managerService: ManagerService,
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.managerData$ = this.managerService.getAll();
    this.vehicleData$ = this.vehicleService.getAll();
  } 
}
