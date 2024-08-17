import React from 'react'
import {BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          <li>
            <Link to="/company"> Company</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route Path="/Company" element={<Company/>} />
      </Routes>
    </Router>
    </>
  )
}

const Home = ()=> <h1>Home Page</h1>
const About = ()=> { return <h1 className='text-green-400'>About Us</h1>}
const Company = ()=> { return <h1 className='text-pink-400'>Company</h1>}

export default App