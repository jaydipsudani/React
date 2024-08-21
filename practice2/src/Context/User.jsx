import { createContext, useContext, useState } from "react";


export const UserContext = createContext(
    
);

export const ThemeProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )}

export default function useUser(){
    return useContext(UserContext)
}