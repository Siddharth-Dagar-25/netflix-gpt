import React, { useState } from 'react';
import Header from './Header';
import backgroundImage from '../utils/images/netflix-background.jpeg'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={backgroundImage} alt='background' />
            </div>
            <form className='absolute w-3/12 my-36 mx-auto right-0 left-0  p-12 bg-black text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input
                    type='text'
                    placeholder='Full Name'
                    className='p-4 my-4 w-full bg-gray-700 rounded-lg'

                />}
                <input
                    type='text'
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700 rounded-lg'

                />
                <input
                    type='password'
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700 rounded-lg'
                />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg font-semibold '>{ isSignInForm ? "Sign In" : "Sign Up" }</button>
                <div className='flex items-center justify-evenly'>
                    <p>{ isSignInForm ? "New to Netflix ?" : "Already Registered ?" } </p>
                    <p className='py-4 cursor-pointer hover:underline ' onClick={toggleSignInForm}> { isSignInForm ? "Sign up now" : "Sign In" } </p>
                </div>
                
            </form>
        </div>
    )
}

export default Login