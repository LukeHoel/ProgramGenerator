import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlannedExercise } from '../../models/plan';
import { exercises } from '../../models/exercises.json';
import { Exercise } from '../../models/exercises';
import { muscleGroupColors } from '../../helpers.ts/muscleGroupHelper';
import { MatDialog } from '@angular/material/dialog';
import { EditPlannedExerciseDialogComponent } from './edit-planned-exercise-dialog/edit-planned-exercise-dialog.component';

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
    }
  }

  @Input() readOnly: boolean;
  @Output() deletePlannedExercise = new EventEmitter<PlannedExercise>();

  constructor(private dialog: MatDialog) {}

  editPlannedExercise() {
    const dialog = this.dialog.open(EditPlannedExerciseDialogComponent, {
      data: this.plannedExercise,
      autoFocus: false,
    });

    dialog.afterClosed().subscribe((result) => {
      this.setupPlannedExercise = this.plannedExercise;
    });
  }
}
