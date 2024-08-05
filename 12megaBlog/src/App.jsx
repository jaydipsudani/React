import { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth";
import { login,logout } from "./store/authSlice"
import {Header} from "./components/Header/Header.jsx";
import {Footer} from  './components/Footer/Footer'
function App() {
  const [loading, setLoding] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    
    authService.getCurrentUser().then((userData)=>{
      if(userData)
      {
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoding(false))
  },[])

  return !loading ? (
    <>
  <div className="min-h-screen flex flex-wrap content-between">test</div>
  <div className="w-full block">
    <Header />
    <main>
      {/* outlet */}
    </main>
    <Footer />
  </div></>
) : null
}

export default App;
