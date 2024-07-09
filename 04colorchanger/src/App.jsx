import { useState } from 'react'


function App() {

  const [color,setColor] = useState('yellow')

  return (
    <div className="w-full h-screen " 
    style={{backgroundColor:color}}>
     <div className='fixed flex flex-wrap justify-center bottom-12
     inset-x-0 px-2 rounded-lg'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
        <button onClick = {()=>setColor('red')} className='outline-none px-4 py-1 rounded-full text-white
        shadow-lg' style={{backgroundColor:"red"}}>Red</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
        <button onClick = {()=>setColor('green')} className='outline-none px-4 py-1 rounded-full text-white
        shadow-lg' style={{backgroundColor:"green"}}>green</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
        <button onClick = {()=>setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white
        shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
        <button onClick = {()=>setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white
        shadow-lg' style={{backgroundColor:"purple"}}>purple</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
        <button onClick = {()=>setColor('olive')} className='outline-none px-4 py-1 rounded-full text-white
        shadow-lg' style={{backgroundColor:"olive"}}>olive</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
        <button onClick = {()=>setColor('black')} className='outline-none px-4 py-1 rounded-full text-white
        shadow-lg' style={{backgroundColor:"black"}}>black</button>
      </div>
      

     </div>
    </div>
  )
}

export default App
