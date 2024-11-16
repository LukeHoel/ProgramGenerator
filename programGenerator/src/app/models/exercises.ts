export interface Exercises {
    exercises: Exercise[];
}

export interface Exercise {
    name:             string;
    force:            Force | null;
    level:            Level;
    mechanic:         Mechanic | null;
    equipment:        Equipment | null;
    primaryMuscles:   MuscleGroup[];
    secondaryMuscles: MuscleGroup[];
    instructions:     string[];
    category:         Category;
}

export type Category = "cardio" | "olympic weightlifting" | "plyometrics" | "powerlifting" | "strength" | "stretching" | "strongman";

export type Equipment = "bands" | "barbell" | "body only" | "cable" | "dumbbell" | "e-z curl bar" | "exercise ball" | "foam roll" | "kettlebells" | "machine" | "medicine ball" | "other";

export type Force = "pull" | "push" | "static";

export type Level = "beginner" | "expert" | "intermediate";

export type Mechanic = "compound" | "isolation";

export type MuscleGroup = "abdominals" | "abductors" | "adductors" | "biceps" | "calves" | "chest" | "glutes" | "hamstrings" | "lats" | "lower back" | "middle back" | "neck" | "quadriceps" | "shoulders" | "traps" | "triceps" | "forearms"