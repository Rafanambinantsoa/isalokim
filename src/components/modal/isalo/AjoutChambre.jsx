import React from "react";
import Modal from "../Modal";
import { useChambre } from "../../../context/ChambreContext";

export default function AjoutChambre() {
  const { open, onclose,handleSubmitChambre,errors,listCategorie,getNumeroChambre,getNombreLit,getPrix,getCategorie,getTypeLit} = useChambre();
  return (
    <Modal open={open} onClose={onclose}>
      <h1 className="text-2xl font-semibold mt-5 border-b border-gray-200 w-fit">
        Création Chambre
      </h1>
      <form action="" onSubmit={handleSubmitChambre}>
        <div className="grid grid-cols-2 ">
          <div className="form1">
            <div className="form-group mt-3">
              <label htmlFor="">
                Numéro  chambre <span className="text-red-500 ">*</span>{" "}
              </label>
              <input
                type="text"
                className="form-control w-full mt-2"
                placeholder="Entrer le numero du chambre"
                onChange={getNumeroChambre}
              />
               {errors.numero_chambre && (
                    <p className="text-red-600 mt-1 text-sm">{errors.numero_chambre}</p>
                  )}

            </div>
            <div className="form-group mt-3">
              <label htmlFor="">
              Nombre de lit(s) <span className="text-red-500 ">*</span>{" "}
              </label>
              <input
                type="number"
                className="form-control w-full mt-2"
                placeholder="Entrer le nombre de lit"
                onChange={getNombreLit}
              />
                 {errors.nombre_lits && (
                    <p className="text-red-600 mt-1 text-sm">{errors.nombre_lits}</p>
                  )}

            </div>
            <div className="form-group mt-3">
              <label htmlFor="">
                 Prix Nuitée <span className="text-red-500 ">*</span>{" "}
              </label>
              <input
                type="number"
                className="form-control w-full mt-2"
                placeholder="Entrer le Montant"
                onChange={getPrix}
              />
               {errors.prix_nuitee && (
                    <p className="text-red-600 mt-1 text-sm">{errors.prix_nuitee}</p>
                  )}

            </div>
          </div>
          <div className="form2 ml-10">
            <div className="form-group mt-3">
                <label htmlFor="">Catégorie <span className="text-red-600">*</span></label>
                <select name="" className="form-control w-full mt-2" id="" onChange={getCategorie}>
                <option value="">Choisissez une catégorie</option>
                   {
                    listCategorie.map((row,index)=>(
                      <option value={row.id}>{row.type}</option>
                    ))
                   }
                </select>
                {errors.id_categorie_chambre && (
                    <p className="text-red-600 mt-1 text-sm">{errors.id_categorie_chambre}</p>
                  )}


            </div>
            <div className="form-group mt-3">
                <label htmlFor="">Type de lits  <span className="text-red-600">*</span></label>
              <input type="text" className="form-control w-full mt-2" placeholder="Type de lits " onChange={getTypeLit}/>
              {errors.type_lits && (
                    <p className="text-red-600 mt-1 text-sm">{errors.type_lits}</p>
                  )}
            </div>
          </div>
        </div>
        <div className="button flex mt-5 justify-end">
        <button className='btn'>Annuler</button>
        <button className='btn-primary ml-3' type="submit">Ajouter</button>
      </div>
      </form>
    </Modal>
  );
}
