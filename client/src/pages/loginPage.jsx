import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
  const {register, handleSubmit, formState:{errors}} = useForm();
  const {signin, errors: signinErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  //Funcion submit para enviar los datos al backend
  const onSubmit = handleSubmit((data) =>{
    signin(data);
  })

  useEffect(()=>{
    if(isAuthenticated)navigate('/exercises')
  },[isAuthenticated])

    return (
      <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-emerald-900 max-w-md p-10 rounded-md'>
        {
          signinErrors.map((error,i)=>(
            <div className='bg-red-500 p-2 text-white' key={i}>{error}</div>
          ))
        }
        <form onSubmit={onSubmit}>
          
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
                 <button className='bg-emerald-400 text-white rounded-lg px-4 py-2'>Login</button>
        </form>
        <p className='flex gap-x2 justify-between'>
          Do you not have an account?
          <Link to ='/register' className='text-lime-300'>Go to register</Link>
        </p>
      </div>
    </div>
    )
  }