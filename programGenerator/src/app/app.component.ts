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
  plannedExercise2: PlannedExercise = {
    name: 'Barbell Curls Lying Against An Incline',
    setCount: 2,
    progression: 'reps',
  };
  day: Day = {
    plannedExercises: [this.plannedExercise2, this.plannedExercise],
  };
  day2: Day = { plannedExercises: [this.plannedExercise2] };
  plan: any = { days: [this.day, this.day2] };
}
