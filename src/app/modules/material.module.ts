import { NgModule } from '@angular/core';

import { MatIconModule, MatButtonModule, MatGridListModule, MatExpansionModule, MatProgressBarModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatProgressBarModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
