import { nanoid } from '@reduxjs/toolkit'
import React from 'react'

const Input = React.forwardRef(function Input({
  type = 'text',
  className = '',
  label,
  ...props
}, ref) {
  const id = nanoid()
  return (

    <div className='w-full'>
      {label && <label
        className='inline-block mb-1 pl-1'
        htmlFor={id}
      >{label}</label>}

      <input ref={ref} type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} id={id} {...props} />
    </div>
  )
})

export default Input