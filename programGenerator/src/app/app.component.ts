import { Component } from '@angular/core';
import { Day, Plan, PlannedExercise } from './models/plan';
import { PlanService } from './services/plan.service';

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

  plans: { [key: string]: Plan } = {};

  constructor(private planService: PlanService) {
    this.plans = planService.GetPlans();
    this.plan = this.plans['default'];
  }
}
