import React, { useState } from 'react'
import UserContext from './UserContext'

export function UserContextProvider({children}) {
    const [user,setUser] = useState(null);

    return (
        <>
        <UserContext.Provider value={{user,setUser}}>
            {children}
         </UserContext.Provider>
        </>
    )
}
