import React, { useState } from "react";
import Modal from "../Modal";
import { useAdmin } from "../../../context/AdminContext";
import { Conge } from "../../../service/Conge";
import { useConge } from "../../../context/CongeContext";

export default function AjoutConge() {
  const { openPoste, closeModal, listEmploye, typeConge, toast } = useAdmin();
  const {
    open,
    onclose,
    getUser,
    getTypeConge,
    getMotif,
    getDateDeb,
    getDateFin,
    data,
    handleSubmit,
    errors,
    edit
  } = useConge();

  

  return (
    <Modal open={open} onClose={onclose}>
      <h1 className="text-lg font-semibold  mt-5">{ edit? "Modifier" : "Création"} Congé</h1>
      <form action="" method="post px-5" onSubmit={handleSubmit}>
        <div className="form grid grid-cols-2 gap-5">
          <div className="form1">
            <div className="form-group mt-5">
              <label htmlFor="employe">Employé <span className="text-red-500 font-semibold">*</span></label>
              <select
                name="employe"
                className="form-control h-10 w-full text-sm"
                id="employe"
                value={data.user_id}
                onChange={getUser}
              >
                <option value="">Sélectionnez un employé</option>
                {listEmploye.map((row, index) => (
                  <option key={index} value={row.id}>
                    {row.nom}
                  </option>
                ))}
              </select>
               {/* Message d'erreur pour le nom */}
               {errors.user_id && (
                    <p className="text-red-600 mt-1 text-sm">{errors.user_id}</p>
                  )}
            </div>
            <div className="form-group mt-5">
              <label htmlFor="type">Type</label>
              <select
                name="type"
                className="form-control h-10 w-full text-sm focus:ring-red-500"
                id="type"
                value={data.type_conger_id}
                onChange={getTypeConge}
              >
                <option value="">Sélectionnez un Type congé <span className="text-red-500 font-semibold">*</span></option>
                {typeConge.map((row, index) => (
                  <option key={index} value={row.id}>
                    {row.nom}
                  </option>
                ))}
              </select>
              {/* Message d'erreur pour le type de conge  */}
              {errors.type_conger_id && (
                    <p className="text-red-600 mt-1 text-sm">{errors.type_conger_id}</p>
                  )}
            </div>
          </div>
          <div className="form2">
            <div className="form-group mt-5">
              <label htmlFor="dateDebut">Date Début <span className="text-red-500 font-semibold">*</span></label>
              <input
                type="date"
                id="dateDebut"
                className="form-control h-10 w-full"
                value={data.date_debut}
                min={new Date().toISOString().split("T")[0]}
                onChange={getDateDeb}
              />
              {/* Message d'erreur pour le date debut  */}
              {errors.date_debut && (
                    <p className="text-red-600 mt-1 text-sm">{errors.date_debut}</p>
                  )}
            </div>
            <div className="form-group mt-5">
              <label htmlFor="dateFin">Date Fin <span className="text-red-500 font-semibold">*</span></label>
              <input
                type="date"
                id="dateFin"
                className="form-control h-10 w-full"
                value={data.date_fin}
                min={data.date_debut}
                onChange={getDateFin}
              />
              {/* Message d'erreur pour le date fe fin  */}
              {errors.date_fin && (
                    <p className="text-red-600 mt-1 text-sm">{errors.date_fin}</p>
                  )}
            </div>
          </div>
        </div>
        <div className="form-group mt-5">
          <label htmlFor="motif">Motif </label>
          <textarea
            id="motif"
            cols="60"
            rows="20"
            className="form-control w-full h-28"
            value={data.motif}
            onChange={getMotif}
            
          ></textarea>
        
        </div>
        <div className="boutton mt-5 text-right">
          <button type="button" className="btn" onClick={() => onclose()}>
            Annuler
          </button>
          <button type="submit" className="btn-primary ml-3 px-5">
          { edit? "Modifier" : "Ajouter"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
