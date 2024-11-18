import React from 'react'
import isaloImage from "../../assets/isalo.png";

export default function ResetPassord() {
  return (
    <div className="h-screen relative bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${isaloImage})` }}>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>

        <div className="relative flex justify-center items-center pt-10">
          <div className="card-form shadow-2xl  bg-gradient-to-b from-white to-white/35 border border-white/80 rounded-lg  w-fit">
            <div className="form py-3">
              <div className="text-center">
                <h1 className="text-4xl font-medium text-primary">Toil d'Isalo</h1>
                <h3 className="font-semibold text-lg mt-5 ">Changer votre mot de passe</h3>
              </div>
              <form className="px-5">
              <div className="form-group mt-5">
                  <label htmlFor="password" className="text-secondary text-sm font-semibold"> Nouveau t de passe :</label>
                  <input
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    className={`form-control w-full rounded-md bg-transparent placeholder:text-sm  placeholder:text-secondary ${ 'border-red-600'}`}
                  />
                  {/* Error message */}
                
                </div>
                <div className="form-group mt-5">
                  <label htmlFor="password" className="text-secondary text-sm font-semibold">Confirmez votre mot de passe :</label>
                  <input
                    type="password"
                    placeholder="Confirmez votre mot de passe"
                    className={`form-control  w-full rounded-md bg-transparent placeholder:text-sm placeholder:text-secondary ${ 'border-red-600'}`}
                  />
                  {/* Error message */}
                
                </div>
                <div className="mx-12 mt-5">
                  <button type="submit" className="btn-primary  w-[80%] font-semibold rounded-full">Changer</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}
