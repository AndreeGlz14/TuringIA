import axios from './axios'

export const createExerciseRequest = (exercise) => axios.post('/createExercise', exercise);
export const getExercisesRequest = () => axios.get('/exercises');
export const getExerciseRequest = (id) => axios.get(`/exercise/${id}`);
export const updateExerciseRequest = (id, exercise) => axios.put(`/updateExcercise/${id}`,exercise);
export const deleteExerciseRequest = (id) => axios.delete(`/deleteExercise/${id}`);