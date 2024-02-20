import { WorkoutSet } from './definitions'

export default function getWorkoutSet() : WorkoutSet {
    // Initialize the default 7 minute workout set
    
    const workoutSet: WorkoutSet = {id: 1, name: '7 Minute Workout', activities: []};
    workoutSet.activities.push({id: 0, name: 'Get Ready!!', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 1, name: 'Jumping Jacks', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 2, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 3, name: 'Wall Sit', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 4, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 5, name: 'Push-up', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 6, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 7, name: 'Abdominal Crunch', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 8, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 9, name: 'Step-up onto Chair', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 10, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 11, name: 'Squat', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 12, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 13, name: 'Triceps Dip on Chair', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 14, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 15, name: 'Plank', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 16, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 17, name: 'High Knees', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 18, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 19, name: 'Lunge', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 20, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 21, name: 'Push-up and Rotation', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 22, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 23, name: 'Side Plank Right', durationSeconds: 30, active: 'work'});
    workoutSet.activities.push({id: 24, name: 'Rest', durationSeconds: 10, active: 'rest'});
    workoutSet.activities.push({id: 25, name: 'Side Plank Left', durationSeconds: 30, active: 'work'});
    
    /*
    const workoutSet: WorkoutSet = {id: 1, name: 'Full Body Workout', activities: []};
    workoutSet.activities.push({id: 0, name: 'Get Ready!!', durationSeconds: 3, active: 'rest'});
    workoutSet.activities.push({id: 1, name: 'Jumping Jacks', durationSeconds: 5, active: 'work'});
    workoutSet.activities.push({id: 2, name: 'Rest', durationSeconds: 3, active: 'rest'});
    */
    return workoutSet;
}