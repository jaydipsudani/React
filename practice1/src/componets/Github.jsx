import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  //   const [data,setData]  = useState([])
  //  useEffect(()=>{
  //   try {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  //   } catch (error) {
  //     setData(error)
  //   }
    
    
  //  },[])
  const data = useLoaderData(); 
  return (
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <img  className=' w-40' src={data.avatar_url} />
        
         </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const responce = await fetch('https://api.github.com/users/hiteshchoudhary')
  return responce.json()
}