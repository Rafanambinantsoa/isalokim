import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginLayout from '../pages/layout/LoginLayout'
import Connexion from '../pages/auth/Connexion'
import PassordForgot from '../pages/auth/PassordForgot'
import ResetPassord from '../pages/auth/ResetPassord'

export default function LoginRoute() {
  return (
    <Routes>
        <Route element={<LoginLayout/>}>
          <Route index element={<Connexion/>} />
          <Route path='/connexion' element={<Connexion/>}/>
          <Route path='/forgotPassword' element={<PassordForgot/>}/>
          <Route path='/reset-password' element={<ResetPassord/>}/>
        </Route>
    </Routes>
  )
}
