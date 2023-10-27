import mongoose from "mongoose";

//Creamos el esquema del ejercicio
const ExerciseCollection = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },

    reps:{
        type: Number,
        required: true
    },
    muscle:{
        type: String,
        trim: true,
        required: true
    },

    score:{
        type: Number,
        required: true
    },

    imgExercise:{
        type: String
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    }
},{
    timestamps: true
}
)

export default mongoose.model('exercise', ExerciseCollection );