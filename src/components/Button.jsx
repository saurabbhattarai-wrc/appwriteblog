import React from 'react'

function Button({
    text,
    type,
    className='',
    bgColor ='bg-blue-600',
    textColor='text-white',
    ...porps
}) {
  return (
    <button type={type} className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...porps}>{text}</button>
  )
}

export default Button