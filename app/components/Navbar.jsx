"use client"
import Link from 'next/link'
import React from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'


const Navbar = () => {

const {status} = useSession()

  return (
    <div className='p-4 flex justify-between items-center shadow-md'>
      <Link className='font-bold text-lg text-blue-700 ' href={"/"}>PokaPur</Link>
      {status ==='authenticated'?(
      <button onClick={()=> signOut()} type='submit' className='bg-slate-900 text-white px-6 py-2 rounded-md'>Sign Out</button>
      ):(
        <button onClick={()=>signIn('google')} type='submit' className='bg-slate-900 text-white px-6 py-2 rounded-md'>Sign In</button>

      ) }
      </div>
  )
}

export default Navbar