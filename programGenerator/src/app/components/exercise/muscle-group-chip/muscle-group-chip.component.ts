import { Component, Input } from '@angular/core';
import { MuscleGroup } from '../../../models/exercises';
import { muscleGroupColors } from '../../../helpers.ts/muscleGroupHelper';

@Component({
  selector: 'app-muscle-group-chip',
  templateUrl: './muscle-group-chip.component.html',
  styleUrl: './muscle-group-chip.component.scss',
})
export class MuscleGroupChipComponent {
  muscleGroupColors = muscleGroupColors;
  @Input() muscleGroup: MuscleGroup;
}
