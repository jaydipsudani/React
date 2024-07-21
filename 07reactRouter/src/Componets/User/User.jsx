import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams()

    return (
        <>
            <div className='bg-orange-400 py-5 text-black text-3xl text-center'>User : {userid}</div>
        </>
    )
}
