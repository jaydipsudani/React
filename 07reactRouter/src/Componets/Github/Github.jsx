import React from 'react'
import { useState } from 'react'
import {useLoaderData} from 'react-router-dom'

export default function Github() {
    // const [data,setData] = React.useState([])
    // React.useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //    .then(response => response.json())
    //    .then(data => setData(data))
    // }, [])
const data = useLoaderData();

    return (
        <>
        <div>
            <div className='text-center m-4 bg-gray-500'>
                Github Followers : {data.followers} 
            </div>
            <img src={data.avatar_url} width={300} alt='Github'></img>
            </div>
        </>
    )
}

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}