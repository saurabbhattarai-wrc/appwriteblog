import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({
  $id,
  title,
  featuredImage,
}) {
  let preview = service.getFilePreview(featuredImage)

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img className='rounded-xl' src={preview.href} alt={title} />
        </div>
        <h1 className='text-xl font-bold'>{title}</h1>
      </div>
    </Link>
  )
}

export default PostCard