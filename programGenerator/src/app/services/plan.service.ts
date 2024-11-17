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
}
