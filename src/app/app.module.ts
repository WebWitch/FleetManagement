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
import { MatMenuModule } from '@angular/material/menu';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddManagerComponent } from './component/manager/add-manager/add-manager.component';
import { EditManagerComponent } from './component/manager/edit-manager/edit-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManagerListComponent,
    ManagerVehiclesComponent,
    MapComponent,
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
    AngularFirestoreModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
