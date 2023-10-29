import { useExercise } from "../context/ExerciseContext";
import {Link} from 'react-router-dom'

export function ExerciseCard({exercise}){
    const {deleteExercise} = useExercise();
    return(
        <div className="border border-black bg-indigo-200 max-w-sm p-6 rounded-lg mt-4 ml-4 ">
            <div>
            <h5 className="text-lime-950 font-bold mb-2 text-2xl tracking-tight">Name: {exercise.name}</h5>
            <h2 className="text-lime-950 font-bold">Number of repetitions: {exercise.reps}</h2>
            <h1 className="text-lime-950 font-bold">Muscle: {exercise.muscle}</h1>
            <h1 className="text-lime-950 font-bold">Score: {exercise.score}</h1>
            </div>
            <div className="col-span-2 border-black text-center">
                <button className="bg-red-500 text-white px-4 py-1 rounded-sm" onClick={()=>{
                    deleteExercise(exercise._id)
                }}>Delete</button>

                <button className="bg-emerald-400 text-white px-4 py-1 rounded-sm">
                    <Link to={`/exercise/${exercise._id}`}>Update</Link>
                </button>
            </div>
        </div>
    )
}