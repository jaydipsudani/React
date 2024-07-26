import { createContext, useContext } from 'react';
import './App.css'

const themeContext = createContext(null);

export default function MyApp() {
  return (
    <themeContext.Provider value="Jaydip">
      <Form/>
    </themeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title }) {
const myuser = useContext(themeContext)
  return (
   <>
   <h1>{title} {myuser}</h1>
   </>
  )
}

function Button({ children }) {
  
  return (
    <></>
  );
}
