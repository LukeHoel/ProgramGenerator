import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Day, Plan, PlannedExercise } from '../../models/plan';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { PlanService } from '../../services/plan.service';
import { EditPlannedExerciseDialogComponent } from '../exercise/edit-planned-exercise-dialog/edit-planned-exercise-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {
  dayIndexesFromDayCount,
  dayNames,
} from '../../helpers.ts/muscleGroupHelper';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss',
})
export class PlanComponent implements OnInit {
  @ViewChildren(CdkDropList) allDropLists: QueryList<CdkDropList> | undefined;
  @Input() name: string;
  @Input() plan: Plan;

  constructor(private planService: PlanService, private dialog: MatDialog) {}
  dayIndexesFromDayCount = dayIndexesFromDayCount;
  dayNames = dayNames;
  drop(event: CdkDragDrop<PlannedExercise[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addPlannedExercise(day: Day) {
    const plannedExercise: PlannedExercise = {
      name: '',
      setCount: '3',
      progression: 'reps',
    };
    const dialog = this.dialog.open(EditPlannedExerciseDialogComponent, {
      data: plannedExercise,
    });

    dialog.afterClosed().subscribe((result) => {
      if (plannedExercise.name) {
        day.plannedExercises = [...day.plannedExercises, plannedExercise];
      }
    });
  }

  addDay() {
    const plannedExercise: PlannedExercise = {
      name: '',
      setCount: '3',
      progression: 'reps',
    };
    const dialog = this.dialog.open(EditPlannedExerciseDialogComponent, {
      data: plannedExercise,
    });

    dialog.afterClosed().subscribe((result) => {
      if (plannedExercise.name) {
        this.plan.days = [
          ...this.plan.days,
          {
            plannedExercises: [plannedExercise],
          },
        ];
      }
    });
  }

  ngOnInit() {}

  savePlan() {
    localStorage.setItem('selectedPlanKey', this.name);
    this.planService.SavePlan(this.name, this.plan);
  }

  deletePlan() {
    this.planService.DeletePlan(this.name);
  }

  deletePlannedExercise(day: Day, exercise: PlannedExercise) {
    const index = day.plannedExercises.indexOf(exercise);
    day.plannedExercises.splice(index, 1);
  }
}
