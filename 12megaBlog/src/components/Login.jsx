import React, {useState} from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const [error ,setError] = useState("");
    const login = async(data)=>{
      setError("")
      try {
        const sesstion = await authService.login(data)
        if(sesstion)
        {
          const userData = await authService.getUserData()
          if(userData) dispatch(authLogin(userData));
          navigate('/')
        }
      } catch (error) {
        
      }
      
    }
    return (
      <div className="login-container"></div>
    );
}
  
    
    
 


export default Login