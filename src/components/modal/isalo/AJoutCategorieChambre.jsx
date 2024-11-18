import React from 'react'
import Modal from '../Modal'
import { useChambre } from '../../../context/ChambreContext'

export default function AJoutCategorieChambre() {
  const {open,onclose,getType,errors,handleSubmit} =  useChambre()
  return (
    <>
    <Modal open={open} onClose={onclose}>
    <h1 className="text-2xl font-semibold mt-5 border-b border-gray-200 w-fit">Création Catégorie</h1>
    <form  onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        <label htmlFor="">Nom de Catégorie <span className='text-red-500 '>*</span> </label>
        <input type="text"className={`form-control w-full mt-2 ${ errors.type && "border-red-600"}`}  placeholder='Entrer le Nom du catégorie' onChange={getType} />
      </div>
      <div className="button flex mt-5 justify-end">
        <button className='btn'>Annuler</button>
        <button className='btn-primary ml-3' type='submit'>Ajouter</button>
      </div>
    </form>
    </Modal>
    </>
  )
}
