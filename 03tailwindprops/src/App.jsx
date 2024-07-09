import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './componets/card'

function App() {
  
  const [count, setCount] = useState(0)
  const data={
    username:"jaydip",
    text:"hi this is jaydip sudani "
  }
  return (
    <>
      <h1 className='bg-green-800 text-black p-5 rounded-xl m-3'>tailwind test</h1>
      <button className="bg-sky-500 hover:bg-sky-700 m-6">
  Save changes
</button>
    <Card username="jaydip" btnText= "Click Me"/>
    <Card username="Trupti"/>
    </>
  )
}

export default App
