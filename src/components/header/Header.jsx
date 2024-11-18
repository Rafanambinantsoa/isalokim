import React, { useEffect } from 'react'
import { MagnifyingGlassIcon ,BellIcon, CogIcon, LockClosedIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import test from '../../assets/test.jpg'
import logo from '../../assets/logo.png'
import { useAuth } from '../../context/AuthContext'
import { useAdmin } from '../../context/AdminContext'
import { ChevronDown } from 'lucide-react'


export default function Header() {
  const {app} =  useAdmin()
  const {user} = useAuth()


  return (
    <div className='header flex justify-between  shadow-sm items-center px-8 py-2'>
        <div className="">
     <p>{app}</p>
      </div>
      <div className="flex items-center space-x-4 mr-5">
    
      <div className="photo  flex items-center ">
       <img src={test} alt="" srcset="" className='w-10 h-10 rounded-full'  />
       <ChevronDown className='mt-5'/>
      </div>
    </div>
    </div>
  )
}
