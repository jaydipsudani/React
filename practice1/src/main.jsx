import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Layout from "./componets/Layout.jsx";
import About from "./componets/About.jsx";
import Home from "./componets/Home.jsx";
import Contact from "./componets/Contact.jsx";
import Error from "./componets/Error.jsx";
import User from "./componets/User.jsx";
import Github, { githubInfoLoader } from "./componets/Github.jsx";

// const router =  createBrowserRouter([
//   {
//       path:"/",
//       element: <Layout />,
//       children:[
//         {
//           path:"",
//           element: <Home />
//         },
//         {
//           path:"/about",
//           element:<About />
//         }

//       ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path=''  element={<Home />}/>
//       <Route path='about' element={<About />}>
//         <Route path="user" element={<User />}/>
//       </Route>

//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User/>} />
//       <Route
//       loader={githubInfoLoader}
//       path='github' element={<Github/>} />
//       <Route path="*" element={<Error />}/>
//     </Route>
//   )
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<About />} errorElement={<Error />}/>
      <Route path="" element={<Home />} errorElement={<Error />}/>
      <Route path="github" element={<Github />} />
    </Route>
  )
)

const r = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}  > 
      <Route path="about" element={<About/>} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>
);
