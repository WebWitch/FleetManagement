import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './component/map/map.component';
import { environment } from 'environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { AuthGuard } from '@/helpers';
import { AuthService, LoggerService } from '@/services';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.keys.agm
    }),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuard, AuthService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
