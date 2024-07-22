import React, { useState , useContext } from 'react'
import UserContext from '../context/UserContext'

export function Login() {

        const  [username, setUsername] = useState('')
        const [password, setpassword] = useState('')
        const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }

    return (
        <div>
            <h2>
                <input type="text" value={username} placeholder='Username' onChange={(e)=>setUsername(e.target.value)} />
                <input type="password" value={password} placeholder='Password' onChange={(e)=>setpassword(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </h2>
        </div>
    )
}
