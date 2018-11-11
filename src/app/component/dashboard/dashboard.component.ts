import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../service/manager.service';
import { LoggerService } from '../../service/logger.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(
    private logger: LoggerService,
    private managerService: ManagerService
    ) { }

  managerNames: string[] = [];

  ngOnInit() {
    this.managerService.getAll().subscribe(managers => {
      this.logger.log('DashboardComponent: Got managers', managers);
      this.managerNames = managers.map(manager => manager.username);
    });
  }

}
