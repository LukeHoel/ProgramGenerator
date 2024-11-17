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

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss',
})
export class PlanComponent implements OnInit {
  @ViewChildren(CdkDropList) allDropLists: QueryList<CdkDropList> | undefined;
  @Input() name: string;
  @Input() plan: Plan;

  constructor(private planService: PlanService) {}

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
  }

  addDay() {
    this.plan.days = [
      ...this.plan.days,
      {
        plannedExercises: [],
      },
    ];
  }

  ngOnInit() {}

  savePlan() {
    localStorage.setItem('selectedPlanKey', this.name);
    this.planService.SavePlan(this.name, this.plan);
  }

  deletePlannedExercise(day: Day, exercise: PlannedExercise) {
    const index = day.plannedExercises.indexOf(exercise);
    day.plannedExercises.splice(index, 1);
  }
}
