export type Activity = {
    id: number;
    name: string;
    durationSeconds: number;
    active: 'work' | 'rest';
};

export type WorkoutSet = {
    id: number;
    name: string;
    activities: Activity[];
};