import {useForm} from 'react-hook-form'
import { useAuth } from "../context/AuthContext"
import {useNavigate, Link} from 'react-router-dom'
import { useEffect } from 'react';

export default function Register() {
  const {register, handleSubmit, formState:{errors}} = useForm();
  const {signup, isAuthenticated, errors: registerErrors} = useAuth();
  const navigate = useNavigate()

  //Si el usuario esta autenticado se va a la pagina de los ejercicios
  useEffect(() =>{
    if(isAuthenticated){
      navigate('/exercises')
    }
  },[isAuthenticated])
  
  //Guarda los datos del usuario con todos sus valores al momento de hacer un submit en el form
  const onSubmit = handleSubmit(async(values)=>{
    values.age = parseInt(values.age, 10);
    signup(values);
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-emerald-900 max-w-md p-10 rounded-md'>
        {
          registerErrors.map((error,i)=>(
            <div className='bg-red-500 p-2 text-white' key={i}>{error}</div>
          ))
        }
        <form onSubmit={onSubmit}>
          <input type="text" {...register("username",{required: true})}
                 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                 placeholder='Username'/>
                 {
                  errors.username && (
                    <p className='text-lime-300'>Username is required</p>
                  )
                 }
          <input type="text" {...register("name",{required: true})}
                 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                 placeholder='Name'/>
                 {
                  errors.name && (
                    <p className='text-lime-300'>Name is required</p>
                  )
                 }
          <input type="text" {...register("last_name",{required: true})}
                 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                 placeholder='Last name'/>
                 {
                  errors.last_name && (
                    <p className='text-lime-300'>Last name is required</p>
                  )
                 }
          <input type="text" {...register("email",{required: true})}
                 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                 placeholder='Email'/>
                 {
                  errors.email && (
                    <p className='text-lime-300'>Email is required</p>
                  )
                 }
          <input type="password" {...register("password",{required: true})}
                 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                 placeholder='Password'/>
                 {
                  errors.password && (
                    <p className='text-lime-300'>Email is required</p>
                  )
                 }
          <input type="password" {...register("confirmPassword",{required: true})}
                 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                 placeholder='Confirm Password'/>
                 {
                  errors.password && (
                    <p className='text-lime-300'>Confirm your password please</p>
                  )
                 }
          <input type="number" {...register("age",{required: true})}
                 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                 placeholder='Age'/>
                 {
                  errors.age && (
                    <p className='text-lime-300'>Age is required</p>
                  )
                 }
                 <button className='bg-emerald-400 text-white rounded-lg px-4 py-2'>Register</button>
        </form>
        <p className='flex gap-x2 justify-between'>
          Do you have an account?
          <Link to ='/login' className='text-lime-300'>Go to login</Link>
        </p>
      </div>
    </div>
      
    
  )
}