import { useState } from 'react'
import { UserContextProvider } from './context/UserContextProvider'
import Profile from './components/Profile'
import { Login } from './components/Login'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <UserContextProvider>
      <Login />
      <Profile />
     </UserContextProvider>
    </div>
  )
}

export default App
