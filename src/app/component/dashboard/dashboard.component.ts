import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../service/manager.service';
import { LoggerService } from '../../service/logger.service';
import { Manager } from '../../models/manager.model';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


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
  private searchUsernames = new Subject<string>();

  ngOnInit() {
    this.managerService.getAll().subscribe(managers => {
      this.logger.log('DashboardComponent: Got managers', managers);
      this.managerNames = managers.map(manager => manager.username);
    });
  }

  search(username: string): void {
    this.searchUsernames.next(username);
  }

  findManager(username: string) {
    // return this.managerService.getUsername(username);
  }
}
