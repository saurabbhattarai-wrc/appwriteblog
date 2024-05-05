import React, { useState, useEffect, useRef } from 'react'
import authService from '../../appwrite/auth'
import { Link } from 'react-router-dom';


function Profile() {
  const [user, setUser] = useState('')
  const [image, setImage] = useState('https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png')

  const ref = useRef()

  const getUser = async () => {
    const user = await authService.getCurrentUser();
    setUser(user)
  }


  useEffect(() => {
    getUser()
  }, [])

  function toggleProfileCard() {
    // console.log(ref.current.style);
    let left = ref.current.style.marginLeft

    if (left == '44rem') {
      ref.current.style.left = '24rem'
      ref.current.style.display = 'block'
    } 
    else if (left == '24rem') {
      ref.current.style.left = '44rem'
      ref.current.style.display = 'none'
    }

  }

  return (
    <>
      <button onClick={() => toggleProfileCard()} className='inline-bock relative ml-2 bg-white rounded-full'>
        <img className='w-14 rounded-[50%]' src={image} />
      </button>


      <div ref={ref} className='ml-[44rem] duration-100 hidden mt-[14rem] p-4 absolute text-white bg-[#989898]'>
        <button className='rounded-full bg-white'>
          <img className='rounded-[50%] w-14' src={image} alt='src' />
        </button>

        <Link to='/profile-card'>
          <button>
            <img src='edit.svg' />
          </button>
        </Link>

        <div>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>

      </div>
    </>
  )
}

export default Profile
