import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componets/Home/Home.jsx'
import About from './componets/About/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    Children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      }
  ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
