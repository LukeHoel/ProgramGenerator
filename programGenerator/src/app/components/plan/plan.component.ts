import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Plan, PlannedExercise } from '../../models/plan';
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
  @ViewChildren(CdkDropList) allDropLists!: QueryList<CdkDropList>;
  @Input() plan: Plan;
  drop(event: CdkDragDrop<PlannedExercise[]>) {
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
}
