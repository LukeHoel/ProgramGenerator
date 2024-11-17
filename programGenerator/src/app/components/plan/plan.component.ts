import { Component, Input } from '@angular/core';
import { Plan } from '../../models/plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss',
})
export class PlanComponent {
  @Input() plan: Plan;
}
