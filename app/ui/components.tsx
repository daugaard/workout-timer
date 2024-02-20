"use client"

import { Roboto_Mono } from "next/font/google";
import { WorkoutSet, Activity} from "@/app/lib/definitions"; 

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export function ActivityHeader({activityName}: {activityName: string}) {
  return (
    <h1 className={["text-6xl", "text-center", "p-8"].join(" ")}>
      {activityName}
    </h1>
  )

}

export function Timer({timeSeconds}: {timeSeconds: number}) {
  const minutes : String = String(Math.floor(timeSeconds / 60)).padStart(2, "0");
  const seconds : String = String(timeSeconds % 60).padStart(2, "0");
  return (
    <div className={[roboto_mono.className, "text-8xl", "text-center", "p-8"].join(" ")}>{minutes}:{seconds}</div>
  )
}

export function ProgressBar({timeRemaining, totalDuration}: {timeRemaining: number, totalDuration: number}) {
  const progress = (totalDuration - timeRemaining) / totalDuration * 100;
  return (
    <div className="w-full h-6 bg-gray-200 rounded-full">
      <div className="h-full bg-green-500 rounded-full" style={{width: `${progress}%`}}></div>
    </div>
  )
}

export function GlobalProgress({timeElapsed, totalDuration}: {timeElapsed: number, totalDuration: number}) {
  const minutesElapsed : String = String(Math.floor(timeElapsed / 60)).padStart(2, "0");
  const secondsElapsed : String = String(timeElapsed % 60).padStart(2, "0");
  const totalLeft = totalDuration - timeElapsed;
  const minutesLeft : String = String(Math.floor(totalLeft / 60)).padStart(2, "0");
  const secondsLeft : String = String(totalLeft % 60).padStart(2, "0");

  return (
    <div className="pt-8">
      <div className="flex justify-between">
        <span>{minutesElapsed}:{secondsElapsed}</span>
        <span>{minutesLeft}:{secondsLeft}</span>
      </div>
      <ProgressBar timeRemaining={totalDuration-timeElapsed} totalDuration={totalDuration} />
    </div>
  )
}

export function Controls({onStart, onPause, onReset}: {onStart: () => void, onPause: () => void, onReset: () => void}) {
  return (
    <div className="pt-8 flex justify-between">
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export function WorkoutSetSettings({workoutSet}: {workoutSet: WorkoutSet}) {
  return (
    <div>
      <h1>{workoutSet.name}</h1>
      <WorkoutSetTable activities={workoutSet.activities} />
    </div>
  )
}

export function WorkoutSetTable({activities}: {activities: Activity[]}) {
    const totalDuration = activities.reduce((acc, activity) => acc + activity.durationSeconds, 0);
    const totalDurationMinutes = Math.floor(totalDuration / 60);
    const totalDurationSeconds = totalDuration % 60;

    return (
      <>
        <table className="border border-slate-500">
          <tbody>
            {activities.map(activity => (
              <WorkoutSetActivity activity={activity} key={activity.id} />
            ))}
          </tbody>
        </table>
        <span>Total Duration: {totalDurationMinutes} minutes and {totalDurationSeconds}</span>
      </>
    )
}

export function WorkoutSetActivity({activity, key}: {activity: Activity, key: number}) {
  return (
    <tr className="border border-slate-500">
      <td className="border border-slate-500 p-2">{activity.name}</td>
      <td className="border border-slate-500 p-2">{activity.durationSeconds}s</td>
      <td className="border border-slate-500 p-2">{activity.active}</td>
    </tr>
  )
}