import React from 'react'
import Modal from '../Modal'
import { useAdmin } from '../../../context/AdminContext'

export default function AjoutTransaction() {
    const {openPoste,closeModal} =  useAdmin()
  return (
    <Modal open={openPoste} onClose={closeModal}>
      <h1 className="text-lg font-semibold text-center mt-5">Create Transaction </h1>
      <form action="" method="post px-5">
        <div className="form grid grid-cols-2 gap-5">
            <div className="form1">
            <div className="form-group mt-5">
          <label htmlFor="">Employé</label>
          <select name=""  className="form-control h-10 w-full text-sm" id="">
            <option value="" className='text-gray-600 text-sm'>RANDRIANASOLO Jean Marc  Thony</option>
          </select>
            </div>
            <div className="form-group mt-5">
          <label htmlFor="">Type</label>
          <select name=""  className="form-control h-10 w-full text-sm" id="">
            <option value="" className='text-gray-600 text-sm'>Avancé</option>
          </select>
            </div>
            </div>
            <div className="form2">
            <div className="form-group mt-5">
          <label htmlFor="">Date</label>
          <input
            type="date"
            className="form-control h-10 w-full"
            placeholder="Entrer le nom"
          />
        </div>
        <div className="form-group mt-5">
          <label htmlFor="">Montant</label>
          <input
            type="number"
            className="form-control h-10 w-full"
            placeholder="Entrer le Montant"
          />
        </div>
            </div>
        </div>
        <div className="form-group mt-5">
            <label htmlFor="">Déscription</label>
            <textarea name="" id="" cols="60" rows="20" className='form-control w-full h-28'></textarea>
        </div>
        <div className="boutton mt-5 text-right">
          <button className="btn">Annuler</button>
          <button className="btn-primary ml-3 px-5">Ajouter</button>
        </div>
      </form>
    </Modal>
  );
}
