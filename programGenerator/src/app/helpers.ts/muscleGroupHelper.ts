export const muscleGroupColors = {
  chest: '#386DDE',
  lats: '#F05D23',
  triceps: '#48e5c2',
  biceps: '#C42847',
  shoulders: '#6AB547',
  quadriceps: '#a6245f',
  glutes: '#ff69b4',
  hamstrings: '#8cc9d3',
  calves: '#8E4A49',
  traps: '#297373',
  forearms: '#F9C846',
  abdominals: '#297373',
};

export const dayIndexesFromDayCount: { [dayCount: number]: Array<number> } = {
  2: [0, 3],
  3: [0, 2, 4],
  4: [0, 1, 3, 4],
  5: [0, 1, 2, 3, 4],
  6: [0, 1, 2, 3, 4, 5],
};

export const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
