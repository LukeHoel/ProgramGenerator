import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { JsonPipe } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MuscleGroupChipComponent } from './components/exercise/muscle-group-chip/muscle-group-chip.component';
import { MatSelectModule } from '@angular/material/select';
import { DayComponent } from './components/day/day.component';
import { PlanComponent } from './components/plan/plan.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    MuscleGroupChipComponent,
    DayComponent,
    PlanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
