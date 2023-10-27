import {Router} from 'express'
import { createExercise, deleteExercise, getExercise, getExercises, updateExercise } from '../controllers/excercise.controller.js';
import { excerciseValidate } from '../schemas/exerciseValidate.schema.js';
import { SchemaValidate } from '../middlewares/validate.schemas.js';
import { userVerifqued } from '../middlewares/validate.token.js';

const router = Router();

router.post('/createExercise', userVerifqued,SchemaValidate(excerciseValidate),createExercise)

router.get('/exercises', userVerifqued, getExercises);
router.get('/exercise/:id',userVerifqued, getExercise);

router.put('/updateExcercise/:id',userVerifqued,updateExercise);

router.delete('/deleteExercise/:id',userVerifqued,deleteExercise);

export default router;