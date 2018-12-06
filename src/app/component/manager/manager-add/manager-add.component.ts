import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/service/manager.service';
import { Manager } from 'src/app/models/manager.model';

@Component({
  selector: 'app-manager-add',
  templateUrl: './manager-add.component.html',
  styleUrls: ['./manager-add.component.less']
})
export class ManagerAddComponent implements OnInit {
  manager: Manager;
  submitted: boolean;

  constructor(private managerService: ManagerService) { }

  ngOnInit() {
    this.manager = new Manager();
    this.submitted = false;
  }

  onSubmit() {
    this.managerService.addManager(this.manager.username, this.manager.password)
      .subscribe(() => {
        this.submitted = true;
      },
      err => {
        this.submitted = false;
        console.error('Error when submitting manager:', err);
      });
  }

}
