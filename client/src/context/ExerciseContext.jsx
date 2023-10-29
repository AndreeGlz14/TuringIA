import {createContext, useState, useContext} from 'react'
import { createExerciseRequest, getExerciseRequest, getExercisesRequest, updateExerciseRequest,deleteExerciseRequest } from '../api/exercise';
const exerciseContext = createContext();

export const useExercise = () => {
    const context = useContext(exerciseContext);

    if(!context){
        throw new Error('useExercise should be used with an ExerciseProvider')
    }
    return context;
}

export function ExerciseProvider({children}){
    const [exercises, setExercises] = useState([]);

    async function createExercise(exercise){
        const res = await createExerciseRequest(exercise)
        console.log(res);
    }
    async function getExercises(){
        try {
            const res = await getExercisesRequest();
            setExercises(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    async function getExercise (id){
        try {
            const res = await getExerciseRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
    async function updateExercise(id,exercise){
        try {
            await updateExerciseRequest(id, exercise)
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteExercise(id){
        try {
            const res = await deleteExerciseRequest(id);
            if(res.status === 200)
            setExercises(exercises.filter(exercise =>exercise._id !== id));
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <exerciseContext.Provider value={{exercises,createExercise,getExercise,getExercises,deleteExercise,updateExercise}}>
            {children}
        </exerciseContext.Provider>
    )
}