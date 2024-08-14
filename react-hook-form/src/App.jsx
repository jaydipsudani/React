import React from 'react'
import {useForm} from 'react-hook-form'

export default function App() {
  const {
    register,
    handleSubmit,
    formState:{errors}

  } = useForm();

  const onsubmit = (data) => console.log(data);
  
  return (
   <form onSubmit={handleSubmit(onsubmit)}>
    <input {...register("firstname",{required:true})}/>
    {errors.firstname && <span className='text-red-500'>This field is reqired</span>}
    <select {...register("gender")}>
    <option value="female">Female</option>
    <option value="male">Male</option>
    <option value="other">Other</option>
    </select>
    <input type='submit'/>
   </form>
  )
}
