"use client"
import Image from 'next/image'
import React from 'react'
import GoogleBtn from '../images/google-btn.png'
import {signIn} from 'next-auth/react'
const SignInbtn = () => {
  return (
   <button onClick={()=>signIn('google')} className='flex items-center gap-4 shadow-xl rounded-lg pl-3'>
    <Image src={GoogleBtn} width={30}/>
    <span className='bg-blue-500 text-white px-4 py-3'>Sign In With Google</span>
    </button>
  )
}

export default SignInbtn