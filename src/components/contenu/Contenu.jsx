import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

export default function Contenu() {
  return (
    <div className='p-5 '>
       <Outlet/>
    </div>
  )
}
