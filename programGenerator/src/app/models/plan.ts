export interface Plan {
  readOnly: boolean;
  days: Array<Day>;
}

export interface Day {
  plannedExercises: Array<PlannedExercise>;
}

export interface PlannedExercise {
  name: string;
  setCount: string;
  progression: 'reps' | 'weight5lbs' | 'weight2.5lbs' | 'none';
}
