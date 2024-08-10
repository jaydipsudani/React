import React from 'react'
import { useContext } from 'react'
import { ColorContext } from '../App'
function Button({colors}) {
  const {color , setColor} = useContext(ColorContext)
  return (
    <>
    <button className='bg-violet-500 h-10 w-50 rounded-lg px-2 ml-2' style={{backgroundColor:colors}}  onClick={()=>setColor(colors)}>
    {colors}
        </button>
        </>
  )
}

export default Button