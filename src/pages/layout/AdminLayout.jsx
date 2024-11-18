import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import Contenu from '../../components/contenu/Contenu'
import Header from '../../components/header/Header'

export default function AdminLayout() {
  return (
    <div className="flex  min-h-screen">
      {/* Sidebar */}
      <div className="sidebar w-[300px] ">
        <SideBar />
      </div>
      
      {/* Main content */}
      <div className="contenu w-full ml-2 rounded-lg overflow-y-auto max-h-[650px]  bg-white">
        <Header/>
        <div className="mt-5">
        <Contenu />
        </div>
      </div>
    </div>
  )
}
