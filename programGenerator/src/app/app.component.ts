import { Component } from '@angular/core';
import { Day, Plan, PlannedExercise } from './models/plan';
import { PlanService } from './services/plan.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'programGenerator';
  name = 'asdfasdfa';

  selectedPlanKey: string;
  plan: Plan;

  plans: { [key: string]: Plan } = {};

  planKeys: Array<string> = [];

  constructor(private planService: PlanService) {
    this.plans = planService.GetPlans();
    this.planKeys = Object.keys(this.plans);
    this.selectPlan(
      localStorage.getItem('selectedPlanKey') || this.planKeys[0]
    );
  }

  selectPlan(key: string): void {
    this.selectedPlanKey = key;
    this.plan = _.cloneDeep(this.plans[key]);
    localStorage.setItem('selectedPlanKey', this.selectedPlanKey);
  }
}
