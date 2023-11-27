"use client"
import React from 'react'
import SignInbtn from './SignInbtn'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const UserInfo = () => {
  const { status, data: session } = useSession()


  if (status === 'authenticated') {
    return (
      <>
        <div className='shadow-xl p-8 rounded-md flex flex-col gap-3 bg-gray-700'>
          <Image className='mx-auto rounded-md' src={session.user.image}  width={60} height={60}/>
        <div className='mx-auto font-bold text-white'>Name: <span>{session.user.name}</span></div>
        <div className='mx-auto font-bold text-white'>Email: <span>{session.user.email}</span></div>

        </div>
      </>
    )

  }
  else {

    return (
      <>
        <SignInbtn />
      </>
    )
  }
}

export default UserInfo