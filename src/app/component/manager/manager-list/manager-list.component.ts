import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../service/manager.service';
import { Manager } from '../../../models/manager.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.less']
})
export class ManagerListComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  private searchTerms = new BehaviorSubject<string>('');
  managers$: Observable<Manager[]>;
  managerCount: 20;

  ngOnInit() {
    this.managers$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => term.trim() ? this.managerService.search(term) : this.managerService.getAll())
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }
}
