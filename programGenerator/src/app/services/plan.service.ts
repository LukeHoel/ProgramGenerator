import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }

  GetPlans(): { [key: string]: Plan } {
    const plans = localStorage.getItem('plans');
    
    return {};
  } 
}
