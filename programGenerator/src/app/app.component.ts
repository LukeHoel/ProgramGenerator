import { Component } from '@angular/core';
import { Day, PlannedExercise } from './models/plan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'programGenerator';
  name = 'asdfasdfa';
  plannedExercise: PlannedExercise = {
    name: 'Barbell Bench Press - Medium Grip',
    setCount: 2,
    progression: 'reps',
  };
  day: Day = { plannedExercises: [this.plannedExercise] };
  plan: any = { days: [this.day, this.day] };
}
