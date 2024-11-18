import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import TableCategorieChambre from "../../../components/table/TableCategorieChambre";
import { useChambre } from "../../../context/ChambreContext";
import TableChambre from "../../../components/table/TableChambre";
import AJoutCategorieChambre from "../../../components/modal/isalo/AJoutCategorieChambre";
import AjoutChambre from "../../../components/modal/isalo/AjoutChambre";


export default function Chambre() {
  const {nom,setNom,setOpen} =useChambre()

  const openModal = ()=>{
      setOpen(true)
  }

  return (
    <>
      {" "}
      <div className="poste flex items-center justify-between">
        <div className="flex items-center ">
          <span className="text-secondary text-gray-700 text-4xl ">
            {nom=="chambre"?"Chambres":"Catégorie"}
          </span>
          <div className="nombre ml-2 w-5 h-5 bg-gray-200 rounded-full flex justify-center items-center mt-2">
            <span className="text-xs text-primary font-semibold">
              {5}
            </span>
          </div>
        </div>
        <div className="add_employe">
          <button className="flex items-center btn-primary"  onClick={openModal}>
            <PlusCircleIcon className="w-5 h-5 text-white" />
            <span className="text-xs pl-1">Créer {nom=="chambre"?"Chambre":"Catégorie"}</span>
          </button>
        </div>
      </div>
      <div className="lien-fournisseur mt-3 flex justify-center space-x-8" >
        <button   onClick={() => setNom("chambre")}
          className={`text-lg font-semibold ${nom === "chambre" ? "text-primary border-b-2 border-[#9A4C1E]" : ""}`}>Listes des chambres</button>
        <button onClick={() => setNom("catégorie")}
          className={`text-lg font-semibold ${nom === "catégorie" ? "text-primary border-b-2 border-[#9A4C1E]" : ""}`}>Catégorie </button>
        
      </div>
      <div className="mt-10  flex justify-between items-center">
        <div className="search flex items-center">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher"
            className="pl-2 outline-none flex-grow text-secondary text-md placeholder:text-secondary placeholder:text-sm placeholder:font-semibold"
          />
        </div>
      </div>
    <div className="mt-5">
    {
      nom=="chambre" ? (<TableChambre/>):( <TableCategorieChambre/>)
    }
    </div>

    {
      nom=="chambre" ? (  <AjoutChambre/>):(  <AJoutCategorieChambre/>)
    }
    </>
  );
}
