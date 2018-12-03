import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { LoggerService } from './service/logger.service';
import { ManagerListComponent } from './component/manager/manager-list/manager-list.component';
import { ManagerVehiclesComponent } from './component/manager/manager-vehicles/manager-vehicles.component';
import { MapComponent } from './component/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { RawDataReportComponent } from './component/raw/raw-data-report/raw-data-report.component';
import { MatMenuModule } from '@angular/material/menu';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AddComponent } from './component/manager/add/add.component';
import { EditComponent } from './component/manager/edit/edit.component';
import { ListComponent } from './component/manager/list/list.component';
import { AddManagerComponent } from './component/manager/add-manager/add-manager.component';
import { EditManagerComponent } from './component/manager/edit-manager/edit-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManagerListComponent,
    ManagerVehiclesComponent,
    MapComponent,
    RawDataReportComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    AddManagerComponent,
    EditManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.keys.agm
    }),
    FormsModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
