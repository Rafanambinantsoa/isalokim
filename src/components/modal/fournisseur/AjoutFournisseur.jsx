import React, { useState } from 'react'
import Modal from '../Modal'
import { useFournisseur } from '../../../context/FournisseurContext'

export default function () {
    const {open,handleSubmit,onclose,errors,getNom,getAdresse,getContact,data,edit} = useFournisseur()
 
  return (
    <Modal open={open} onClose={onclose}>
        <div className="header">
         <h1 className="text-lg font-semibold  my-5 border-b border-gray-200 w-fit">{ edit? "Modifier" : "Création"}  Fournisseur</h1>
         <form action="" onSubmit={handleSubmit}>
            <div className="form grid grid-cols-2 gap-10">
               <div className="form1">
               <div className="form-group">
                    <label htmlFor="">Nom <span className='text-red-600 ml-2'>*</span></label>
                    <input type="text" value={data.nom} className={`form-control w-full ${ errors.nom && "border-red-600"}`} placeholder='Entrer le nom' onChange={getNom}/>
                    {/* Message d'erreur pour le nom */}
                    {errors.nom && (
                    <p className="text-red-600 mt-1 text-sm">{errors.nom}</p>
                  )}
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="">Adresse <span className='text-red-600 ml-2'>*</span></label>
                    <input type="text" value={data.adresse} className={`form-control w-full  ${ errors.adresse && "border-red-600"}`} placeholder="Entrer l'adresse" onChange={getAdresse}/>
                     {/* Message d'erreur pour l'adresse */}
                     {errors.adresse && (
                    <p className="text-red-600 mt-1 text-sm">{errors.adresse}</p>
                  )}
                </div>
               </div>
               <div className="form1">
               <div className="form-group">
                    <label htmlFor="">Contact <span className='text-red-600 ml-2'>*</span></label>
                    <input type="text" value={data.contact} className={`form-control w-full ${ errors.contact && "border-red-600"}`}placeholder='Entrer le contact' onChange={getContact}/>
                        {/* Message d'erreur pour l'adresse */}
                        {errors.contact && (
                    <p className="text-red-600 mt-1 text-sm">{errors.contact}</p>
                  )}
                </div>
                
               </div>
            </div>
            <div className="border-t border-gray-200 my-5"></div>
            <div className="button text-right ">
                <button className='btn' type='button'>Annuler</button>
                <button className='btn-primary ml-2' type='submit'>{ edit? "Modifier" : "Ajouter"}</button>
            </div>
         </form>
        </div>
    </Modal>
  )
}
