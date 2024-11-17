import { Component, Input } from '@angular/core';
import { PlannedExercise } from '../../models/plan';
import { exercises } from '../../models/exercises.json';
import { Exercise } from '../../models/exercises';
import { muscleGroupColors } from '../../helpers.ts/muscleGroupHelper';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss',
})
export class ExerciseComponent {
  muscleGroupColors = muscleGroupColors;
  exercises = exercises;
  plannedExercise: PlannedExercise;
  exercise: any | Exercise;
  @Input('plannedExercise') set setupPlannedExercise(
    plannedExercise: PlannedExercise
  ) {
    this.plannedExercise = plannedExercise;
    if (this.plannedExercise) {
      this.exercise = this.exercises.find(
        (exercise) => exercise.name === this.plannedExercise.name
      );
      console.error(this.exercise);
    }
  }

  @Input() readOnly: boolean;

  editExercise() {
    this.plannedExercise.name = 'Barbell Ab Rollout - On Knees';
    this.setupPlannedExercise = this.plannedExercise;
  }
}
