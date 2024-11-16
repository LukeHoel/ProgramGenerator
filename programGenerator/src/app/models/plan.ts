export interface Plan {
    days: Array<Day>
}

export interface Day {
    plannedExercises: Array<PlannedExercise>
}

export interface PlannedExercise {
    name: string,
    setCount: number,
    progression: 'reps' | 'weight5lbs' | 'weight2.5lbs',
}