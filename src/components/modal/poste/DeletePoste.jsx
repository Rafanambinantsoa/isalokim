import React from "react";
import Modal from "../Modal";
import { useAdmin } from "../../../context/AdminContext";
import { Poste } from "../../../service/Poste";
import logoDelete from "../../../assets/delete.png"
export default function DeletePoste() {
  const { openPosteDelete, closeModal, id,getPostes,toast,setPoste } = useAdmin();

  const deletePoste = () => {

    if (!id) {
      toast.error("Aucun ID n'est sélectionné. Veuillez réessayer.");
      return;
    }
    
    Poste.deletePoste(id)
      .then((res) => {
        toast.success("Le poste a été supprimé !");
        setPoste((prevList) => prevList.filter((item) => item.id !== id)); // Mettre à jour la liste localement
        getPostes()
        closeModal();
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Modal open={openPosteDelete} onClose={closeModal}>
        <div className="modal-content mt-5 ">
          <div className="image flex justify-center">
            <img src={logoDelete} alt="" />
          </div>
          <div className="w-56">
            <p className="text-center font-semibold text-lg ">
              Êtes-vous sûr de vouloir supprimer ce poste ?
            </p>
          </div>
          <div className="boutton text-center mt-5">
            <button className="btn">Annuler</button>
            <button className="btn-danger ml-3" onClick={deletePoste}>
              Supprimer
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
