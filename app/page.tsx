"use client"

import { useState, useEffect } from "react";

import useSound from 'use-sound';

import { ActivityHeader, Timer, ProgressBar, GlobalProgress, Controls, WorkoutSetSettings } from "@/app/ui/components";
import getWorkoutSet from "@/app/lib/data";

export default function Home() {
  const workoutSet = getWorkoutSet();
  
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const currentActivity = workoutSet.activities[currentActivityIndex];
  
  const [activityTimeRemaining, setActivityTimeRemaining] = useState(currentActivity.durationSeconds);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [completedWorkout, setCompletedWorkout] = useState(false);

  const totalDuration = workoutSet.activities.reduce((acc, activity) => acc + activity.durationSeconds, 0);

  const [shortBeep] = useSound("/sounds/beep-07a.mp3")
  const [longBeep] = useSound("/sounds/beep-09.mp3")
  
  useEffect(() => {
    const timerId = setInterval(() => {
      if (isRunning) {
        if (activityTimeRemaining === 4 || activityTimeRemaining === 3 || activityTimeRemaining === 2) {
          shortBeep();
        }
        if (activityTimeRemaining === 1) {
          longBeep();
        }

        if (activityTimeRemaining > 0) {
          setActivityTimeRemaining(activityTimeRemaining - 1);
          setTimeElapsed(timeElapsed + 1);
        } else {
          if (currentActivityIndex < workoutSet.activities.length - 1) {
            setCurrentActivityIndex(currentActivityIndex + 1);
            setActivityTimeRemaining(workoutSet.activities[currentActivityIndex + 1].durationSeconds);
          } else {
            setIsRunning(false);
            setCompletedWorkout(true);
          }
        }

       
      }

    }, 1000);
    return () => clearInterval(timerId);
  });

  function onStart() {
    setIsRunning(true);
  }

  function onPause() {
    setIsRunning(false);
  }

  function onReset() {
    setIsRunning(false);
    setCurrentActivityIndex(0);
    setActivityTimeRemaining(workoutSet.activities[0].durationSeconds);
    setTimeElapsed(0);
  }

  return (
    <main className="flex min-h-screen flex-row justify-center">
      <div className="basis-4/5 p-8">
        <ActivityHeader activityName={completedWorkout ? "Great job!!!" : currentActivity.name} />
        <Timer timeSeconds={activityTimeRemaining} />
        <ProgressBar timeRemaining={activityTimeRemaining} totalDuration={currentActivity.durationSeconds} />
        <GlobalProgress timeElapsed={timeElapsed} totalDuration={totalDuration} />
        <Controls onStart={onStart} onPause={onPause} onReset={onReset} />
      </div>
      <div className="basis-1/5 p-8">
        <WorkoutSetSettings workoutSet={workoutSet} />
      </div>
    </main>
  );
}