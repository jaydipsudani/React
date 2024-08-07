import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
function Postcard({$id,title ,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
    <div className="w-full bg-white shadow-md p-4 rounded-md">
        <div className='w-full justify-center mb-4'>
      <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className=" rounded-xl" />
      </div>
      
      <div className="text-xl font-bold my-2">{title}</div>
    </div>
    </Link>
  )
}

export default Postcard