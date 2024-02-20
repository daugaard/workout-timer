"use client"

import { WorkoutSet, Activity} from "@/app/lib/definitions"; 


export function ActivityHeader({activityName, nextActivityName}: {activityName: string, nextActivityName? : string}) {
  return (
    <>
      <h1 className={["text-7xl", "text-green-500", "font-bold", "text-center", "pt-8"].join(" ")}>
        {activityName}
      </h1>
      {nextActivityName && <h2 className={["text-4xl", "text-center", "p-8"].join(" ")}>Next: {nextActivityName}</h2>}
    </>
  )

}

export function Timer({timeSeconds}: {timeSeconds: number}) {
  const minutes : String = String(Math.floor(timeSeconds / 60)).padStart(2, "0");
  const seconds : String = String(timeSeconds % 60).padStart(2, "0");
  return (
    <div className={["font-medium", "text-8xl", "text-center", "text-green-500", "p-8"].join(" ")}>{minutes}:{seconds}</div>
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
        <span className="text-2xl p-2">{minutesElapsed}:{secondsElapsed}</span>
        <span className="text-2xl p-2">{minutesLeft}:{secondsLeft}</span>
      </div>
      <ProgressBar timeRemaining={totalDuration-timeElapsed} totalDuration={totalDuration} />
    </div>
  )
}

export function Controls({onStart, onPause, onReset, isRunning}: {onStart: () => void, onPause: () => void, onReset: () => void, isRunning: boolean}) {
  return (
    <div className="pt-16 flex justify-between">
      <button onClick={onPause} className={["text-4xl", isRunning ? "" : "text-slate-800"].join(" ")}>Pause</button>
      <button onClick={onStart} className={["text-4xl", isRunning ? "text-slate-800" : ""].join(" ")} >Start</button>
      <button onClick={onReset} className="text-4xl">Reset</button>
    </div>
  )
}

export function WorkoutSetSettings({workoutSet, currentActivityIndex, onSetCurrentActivityIndex}: {workoutSet: WorkoutSet, currentActivityIndex: number, onSetCurrentActivityIndex: (index: number) => void}) {
  return (
    <div className="justify-center">
      <h1 className="text-2xl pb-1 text-center" >{workoutSet.name}</h1>
      <WorkoutSetTable activities={workoutSet.activities} currentActivityIndex={currentActivityIndex} onSetCurrentActivityIndex={onSetCurrentActivityIndex} />
    </div>
  )
}

export function WorkoutSetTable({activities, currentActivityIndex, onSetCurrentActivityIndex}: {activities: Activity[], currentActivityIndex: number, onSetCurrentActivityIndex: (index: number) => void}) {
    const totalDuration = activities.reduce((acc, activity) => acc + activity.durationSeconds, 0);
    const totalDurationMinutes = Math.floor(totalDuration / 60);
    const totalDurationSeconds = totalDuration % 60;

    return (
      <>
        <table className="">
          <tbody>
            {activities.map((activity, index) => (
              <WorkoutSetActivity activity={activity} active={currentActivityIndex == index} key={activity.id} onSetCurrentActivityIndex={onSetCurrentActivityIndex} />
            ))}
          </tbody>
        </table>
        <p className="text-right">Total Duration: {totalDurationMinutes} minutes {totalDurationSeconds} seconds</p>
      </>
    )
}

export function WorkoutSetActivity({activity, active, onSetCurrentActivityIndex}: {activity: Activity, active: boolean, onSetCurrentActivityIndex: (index: number) => void}) {
  const activeClass = active ? "bg-green-500" : "";
  return (
    <tr className="w-full" onClick={() => onSetCurrentActivityIndex(activity.id)}>
      <td className={["w-full", "p-1", activeClass].join(" ") }>{activity.name} {active}</td>
      <td className={["p-1", activeClass].join(" ") }>{activity.durationSeconds}s</td>
      <td className={["p-1", activeClass].join(" ") }>{activity.active}</td>
    </tr>
  )
}