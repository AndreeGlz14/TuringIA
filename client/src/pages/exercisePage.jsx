import { useEffect } from "react";
import { useExercise } from "../context/ExerciseContext"
import { ExerciseCard } from "../components/exerciseCard";

export default function ExercisePage() {
  const {getExercises, exercises} = useExercise();
  useEffect(()=>{
    getExercises()
  },[])
  if(exercises.length === 0 ) return (<h1>No exercises yet</h1>)

    return (
      <div className="grid grid-cols-3 gap-2">
        {
          exercises.map((exercise)=>(
            <ExerciseCard exercise={exercise} key={exercise._id}/>
          ))}
      </div>
    )
  }