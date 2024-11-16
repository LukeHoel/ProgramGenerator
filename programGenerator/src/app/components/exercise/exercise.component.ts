import { Component, Input } from '@angular/core';
import { PlannedExercise } from '../../models/plan';
import { exercises } from '../../models/exercises.json';
import { Exercise } from '../../models/exercises';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss'
})
export class ExerciseComponent {

  exercises = exercises;
  plannedExercise: any | PlannedExercise;
  exercise: any | Exercise;
  @Input('plannedExercise') set setupPlannedExercise(plannedExercise: PlannedExercise) {
    this.plannedExercise = plannedExercise;
    if (this.plannedExercise) {
      this.exercise = this.exercises.find(exercise => exercise.name === this.plannedExercise.name);
      console.error(this.exercise)
    }
  }

}
