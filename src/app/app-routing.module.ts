import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ManagerListComponent } from './component/manager/manager-list/manager-list.component';
import { MapComponent } from './component/map/map.component';
import { RawDataReportComponent } from './component/raw/raw-data-report/raw-data-report.component';
import { ManagerAddComponent } from './component/manager/manager-add/manager-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'manager', component: ManagerListComponent },
  { path: 'map', component: MapComponent },
  { path: 'raw', component: RawDataReportComponent },
  { path: 'manager/add', component: ManagerAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
