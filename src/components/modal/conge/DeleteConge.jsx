import React from 'react'
import Modal from '../Modal'
import { useAdmin } from '../../../context/AdminContext'
import logoDelete from "../../../assets/delete.png"
import { Conge } from '../../../service/Conge';
import { useConge } from '../../../context/CongeContext';
export default function DeleteConge() {
    const { openPosteDelete, closeModal, id,getPostes,toast } = useAdmin();
    const {getAllConge,setListeConge} =  useConge()

    const deleteConge = ()=>{
      if (!id) {
        toast.error("Aucun ID n'est sélectionné. Veuillez réessayer.");
        return;
      }

      
        Conge.deleteconge(id).then((res)=>{
            toast.success("Le congé a été supprimé !");
            setListeConge((prevList) => prevList.filter((item) => item.id !== id)); // Mettre à jour la liste localement
            closeModal()
            getAllConge()
        }).catch(error=>console.log(error))
    }

  return (
    <Modal open={openPosteDelete} onClose={closeModal}>
        <div className="modal-content mt-5 ">
          <div className="image flex justify-center">
            <img src={logoDelete} alt="" />
          </div>
          <div className="w-56">
            <p className="text-center font-semibold text-lg ">
              Êtes-vous sûr de vouloir supprimer ce congé ?
            </p>
          </div>
          <div className="boutton text-center mt-5">
            <button className="btn">Annuler</button>
            <button className="btn-danger ml-3" onClick={()=>deleteConge()}>
              Supprimer
            </button>
          </div>
        </div>
    </Modal>
  )
}
