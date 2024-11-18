import React from 'react'
import { useNavigate } from 'react-router-dom'

function PassordForgot() {
    const navigate  = useNavigate()
    const  resetPassword = ()=>{
        navigate('/reset-password')
    }
  return (
    <div className='flex justify-center items-center h-full  ' >
        <div className="forgot  bg-white w-[650px] px-5">
            <p>Vous avez oublié votre mot de passe ? Pas de souci ! Veuillez entrer l'adresse e-mail associée à votre compte ci-dessous pour recevoir un lien de réinitialisation</p>
            <form action="" className='mt-5'>
                <div className="form-group ">
                    <label htmlFor="" className='text-lg'>Email : </label>
                    <input type="text" className='form-control w-full mt-5 ' placeholder='Saisir votre email'/>
                </div>
            </form>
            <div className="mt-5 flex justify-around">
                    <button className='btn-danger' onClick={()=>navigate("/connexion")}>Retour</button>
                    <button className='btn-primary' onClick={resetPassword}>Réinitialiser mon mot de passe</button>
            </div>
        </div>
    </div>
  )
}

export default PassordForgot