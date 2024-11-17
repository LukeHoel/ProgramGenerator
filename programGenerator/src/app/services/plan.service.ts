import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';

import defaultPlans from '../models/default-plans.json';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  constructor() {}

  GetPlans(): { [key: string]: Plan } {
    const plans = localStorage.getItem('plans');
    const parsed = plans ? JSON.parse(plans) : defaultPlans;

    return parsed;
  }

  SavePlan(name: string, plan: Plan): void {
    const plans = this.GetPlans();
    plans[name] = plan;
    localStorage.setItem('plans', JSON.stringify(plans));
    window.location.reload();
  }

  DeletePlan(name: string): void {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      const plans = this.GetPlans();
      delete plans[name];
      localStorage.setItem('plans', JSON.stringify(plans));
      localStorage.removeItem('selectedPlanKey');
      window.location.reload();
    }
  }
}
