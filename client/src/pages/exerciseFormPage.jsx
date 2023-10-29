import {useForm} from 'react-hook-form';
import {useExercise} from '../context/ExerciseContext'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';

export default function ExerciseFormPage() {
  const {register, handleSubmit, setValue, formState:{errors}} = useForm();
  const {createExercise, getExercise, updateExercise} = useExercise();
  const navigate = useNavigate();
  const params = useParams()

  useEffect(()=>{
    async function loadExercise(){
      if(params.id){
        const exercise = await getExercise(params.id);
        setValue('name',exercise.name);
        setValue('reps', exercise.reps);
        setValue('muscle', exercise.muscle);
        setValue('score',exercise.score);
      }
    }
    loadExercise()
  },[])

  const onSubmit = handleSubmit((data)=>{
    data.score = parseInt(data.score, 10);
    data.reps = parseInt(data.reps, 10);
    
    if (data.score < 0) {
      data.reps = 0;
    }
  
    if (data.reps < 0 ) {
      data.reps = 0;
    }
  
    if(params.id){
      updateExercise(params.id,data)
    }else{
      createExercise(data);
    }
    navigate('/exercises');
  })

    return (
      <div  className='flex h-[calc(100vh-100px)] items-center justify-center'>
        <div className='bg-emerald-900 max-w-md p-10 rounded-md'>
          <form onSubmit={onSubmit}>

            <input type="text" placeholder='name' {...register('name',{required: true})}
                   className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
                   {
                    errors.name && (
                      <p className='text-lime-300'>Exercise name is required</p>
                    )
                   }
            <input type="number" placeholder='reps' {...register('reps',{required: true,min:0})}
                   className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                   onInput={(e) => {
                    if (e.target.value < 0) {
                      e.target.value = 0;
                    }
                  }}/>
                   {
                    errors.reps && (
                      <p className='text-lime-300'>Exercise repetitions is required</p>
                    )
                   }
              <input type="text" placeholder='muscle' {...register('muscle',{required: true})}
                   className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
                   {
                    errors.muscle && (
                      <p className='text-lime-300'>Exercise muscle is required</p>
                    )
                   }
                   <input type="number" placeholder='score' {...register('score',{required: true,min:0})}
                   className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                   onInput={(e) => {
                    if (e.target.value < 0) {
                      e.target.value = 0;
                    }
                    if (e.target.value > 5) {
                      e.target.value = 5;
                    }
                  }}/>
                   {
                    errors.reps && (
                      <p className='text-lime-300'>Exercise score is required</p>
                    )
                   }
                   <button className='bg-emerald-400 text-white rounded-lg px-4 py-2'>Save Exercise</button>
          </form>
        </div>
      </div>
    )
  }