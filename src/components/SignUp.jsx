import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Input, Button, Logo } from './index'
import authService from '../appwrite/auth'
import { login } from '../store/storeSlice'

function SignUp() {

    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { handleSubmit, register } = useForm()

    const signUp = async (data) => {
        setError('')
        try {
            const userData = await authService.createAccount(data)

            if (userData) {
                const userData = await authService.getCurrentUser()

                if (userData) {
                    dispatch(login(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Log In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(signUp)}>
                    <Input
                        label='Name'
                        type='text'
                        placeholder='Enter Your Name'
                        {...register('name',
                            {
                                required: true,
                            }
                        )}
                    />


                    <Input
                        label='Email'
                        type='email'
                        placeholder='Enter Your Email'
                        {...register('email',
                            {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value) || 'Email address must be valid address'
                                }
                            }
                        )}
                    />
                    <Input
                        label='Password'
                        type='password'
                        placeholder='Enter Your Password'
                        {...register('password',
                            {
                                required: true,
                            }
                        )}
                    />

                    <Button
                        type='submit'
                        text='Sign Up'
                    />
                </form>
            </div>
        </div>
    )
}

export default SignUp