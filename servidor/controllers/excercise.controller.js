import exercise from "../models/exercise.model.js";

//Funcion para crear un ejercicio
export async function createExercise(req, res){

    try {
        const {name, reps, muscle, score}= req.body;

        //Se crea el objeto ejercicio
        const newExercise = new exercise({
            name,
            reps,
            muscle,
            score,
            user: req.User.id
        });
    
        //Para despues guardarlo
        const saveExercise = await newExercise.save();
    
        res.json(saveExercise);
    } catch (error) {
        console.log(error);
    }
   
}

//Funcion para encontrar los  ejercicios de un usuario
export async function getExercises(req, res){
    try {
        const exercises = await exercise.find({
            user: req.User.id
        }).populate('user');
        res.json(exercises)
    } catch (error) {
        return( res.status(404).json({message:"Exercise not found"}))
    }
}

//Funcion para obtener un solo ejercicio
export async function getExercise(req, res){
    try {
        const OneExercise = await exercise.findById(req.params.id).populate('user');

        if(!OneExercise)
        return res.status(404).json({message: 'Exercise not found'});
    
        res.json(OneExercise);
        
    } catch (error) {
        return res.status(404).json({message:'Something is wrong '});

        
    }
}

export async function updateExercise(req, res){
    try {
        const OneExercise = await exercise.findByIdAndUpdate(req.params.id, req.body,{ new: true});
        if(!OneExercise) return res.status(404).json({message: 'Exercise not found'});
        res.json(OneExercise);
    } catch (error) {
        
    }
}

export async function deleteExercise (req, res){
    
    try {
        const exerciseFound = await exercise.findByIdAndDelete(req.params.id);

        if (!exerciseFound) res.status(404).json( { message: 'exercise not found' });

        return res.status(200).json({message:'Exercise deleted succesfully '});

    } catch (error) {
        return res.status(404).json({message: 'algo ocurrio al eliminar la tarea'});
    }

}

