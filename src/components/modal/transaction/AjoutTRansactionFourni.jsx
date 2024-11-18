import React from 'react'
import Modal from '../Modal'
import { useTransaction } from '../../../context/TransactionContext'

export default function AjoutTRansactionFourni() {
    const{open,onclose,getNom,getDateTrans,getMontant,getPayement,handleSubmit,errors,data} =  useTransaction()
  return (
   <>
   <Modal open={open} onClose={onclose}>
        <div className="header">
         <h1 className="text-lg font-semibold  my-5 border-b border-gray-200 w-fit">Création Transaction</h1>
         <form action="" onSubmit={handleSubmit}>
            <div className="form grid grid-cols-2 gap-10">
               <div className="form1">
               <div className="form-group">
                    <label htmlFor="">Nom <span className='text-red-600 ml-2'>*</span></label>
                    <input type="text" className={`form-control w-full `} value={data.nom} placeholder='Entrer le nom' onChange={getNom}/>
                    {/* Message d'erreur pour le nom */}
                    {errors.nom && (
                    <p className="text-red-600 mt-1 text-sm">{errors.nom}</p>
                  )}
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="">Date du Transaction <span className='text-red-600 ml-2'>*</span></label>
                    <input type="date" value={data.dateTrans}  className={`form-control w-full `} placeholder="Entre date transaction" onChange={getDateTrans}/>
                    {/* Message d'erreur pour le nom */}
                    {errors.dateTrans && (
                    <p className="text-red-600 mt-1 text-sm">{errors.dateTrans}</p>
                  )}
                </div>
               </div>
               <div className="form1">
               <div className="form-group">
                    <label htmlFor="">Mode de payement  <span className='text-red-600 ml-2'>*</span></label>
                    <select name="" id="" value={data.payement} className={`form-control w-full `} onChange={getPayement}>
                        <option value=""  disabled>Selectionnez </option>
                        <option value="Mobile" >Mobile </option>
                        <option value="Banquaire" >Carte Bancaire </option>
                    </select>
                      {/* Message d'erreur pour le nom */}
                      {errors.payement && (
                    <p className="text-red-600 mt-1 text-sm">{errors.payement}</p>
                  )}
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="">Montant  <span className='text-red-600 ml-2'>*</span></label>
                    <input type="number" value={data.montant} className={`form-control w-full `}placeholder='Entrer le Montant' onChange={getMontant}/>
                      {/* Message d'erreur pour le nom */}
                      {errors.montant && (
                    <p className="text-red-600 mt-1 text-sm">{errors.montant}</p>
                  )}
                </div>
               </div>
            </div>
            <div className="border-t border-gray-200 my-5"></div>
            <div className="button text-right ">
                <button className='btn' type='button'>Annuler</button>
                <button className='btn-primary ml-2' type='submit'>Ajouter</button>
            </div>
         </form>
        </div>
    </Modal>
   </>
  )
}
