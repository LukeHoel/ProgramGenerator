import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Day, Plan, PlannedExercise } from '../../models/plan';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss',
})
export class PlanComponent {
  @ViewChildren(CdkDropList) allDropLists: QueryList<CdkDropList> | undefined;
  @Input() plan: Plan;
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
    day.plannedExercises = [
      ...day.plannedExercises,
      {
        name: 'Barbell Bench Press - Medium Grip',
        setCount: 2,
        progression: 'reps',
      },
    ];
    console.error(day.plannedExercises);
  }

  addDay() {
    this.plan.days = [
      ...this.plan.days,
      {
        plannedExercises: [],
      },
    ];
  }
}
