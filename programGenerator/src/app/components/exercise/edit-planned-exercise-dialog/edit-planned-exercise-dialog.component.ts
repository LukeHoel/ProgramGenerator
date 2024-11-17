import { Component, Inject, inject } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { exercises } from '../../../models/exercises.json';
import { DialogRef } from '@angular/cdk/dialog';
import * as _ from 'lodash';
import { PlannedExercise } from '../../../models/plan';
@Component({
  selector: 'app-edit-planned-exercise-dialog',
  templateUrl: './edit-planned-exercise-dialog.component.html',
  styleUrl: './edit-planned-exercise-dialog.component.scss',
})
export class EditPlannedExerciseDialogComponent {
  workingPlannedExercise: PlannedExercise;
  exercises = exercises;

  dirty = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) private plannedExercise: PlannedExercise,
    private dialogRef: DialogRef<PlannedExercise>
  ) {
    this.workingPlannedExercise = _.cloneDeep(this.plannedExercise);
  }

  filteredExercises(element: HTMLInputElement) {
    return this.exercises.filter(
      (exercise) =>
        element.classList.contains('ng-pristine') ||
        exercise.name.toLowerCase().includes(element.value?.toLowerCase())
    );
  }

  save() {
    Object.keys(this.workingPlannedExercise).forEach((key) => {
      this.plannedExercise[key] = this.workingPlannedExercise[key];
    });
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
