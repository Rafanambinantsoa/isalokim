import React from "react";
import Modal from "../Modal";
import { useAdmin } from "../../../context/AdminContext";
import logoDelete from "../../../assets/delete.png"
import { Fournisseur } from "../../../service/Fournisseur";

export default function DeleteFournisseur() {
  const { openPosteDelete, closeModal, id,getAllFournisseur,toast,setListFournisseur } = useAdmin();

  const deletePoste = () => {
    if (!id) {
      toast.error("Aucun ID n'est sélectionné. Veuillez réessayer.");
      return;
    }

    Fournisseur.deleteFournisseur(id)
      .then((res) => {
        toast.success("Le fournisseur a été supprimé !");
        setListFournisseur((prevList) => prevList.filter((item) => item.id !== id)); // Mettre à jour la liste localement
        getAllFournisseur()
        closeModal();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Modal open={openPosteDelete} onClose={closeModal}>
        <div className="modal-content mt-5 ">
          <div className="image flex justify-center">
            <img src={logoDelete} alt="" />
          </div>
          <div className="w-56">
            <p className="text-center font-semibold text-lg ">
              Êtes-vous sûr de vouloir supprimer ce Fournisseur  ?
            </p>
          </div>
          <div className="boutton text-center mt-5">
            <button className="btn">Annuler</button>
            <button className="btn-danger ml-3"  onClick={deletePoste}>
              Supprimer
            </button>
          </div>
        </div>
      </Modal>
  )
}
