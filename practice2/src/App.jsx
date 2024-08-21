import {useContext, useState } from "react"
import useUser, { ThemeProvider, userContext } from "./Context/User";



function App() {
 
  return (
    <ThemeProvider>
    <Login2 />
    {user&& <Profile2 />}
    </ThemeProvider> 
  )
}

function Login2()
{
  const [username, setusername] = useState('')
  const {setUser} = useUser();
  const handleSubmit = ()=>{

    setUser(username)
  }
  return(
    <>
  <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} className="w-50 bg-green-400" />
  <button onClick={handleSubmit}>submit</button></>
  )
}

function Profile2()
{
  const {user} = useUser()
    return (
      <>
      <div>Welcome {user} </div>
      </>
    )
}

export default App
