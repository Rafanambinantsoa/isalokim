import React, { useState } from 'react'
import {
    CloudArrowDownIcon,
    CloudArrowUpIcon,
    MagnifyingGlassIcon,
    PlusCircleIcon,
  } from "@heroicons/react/24/solid";
import { useProduit } from '../../../context/ProduitContext';
import AjoutProduit from '../../../components/modal/Ramirandava/AjoutProduit';

 
export default function ProduitConsome() {

    const {setOpen,stock,setStock} = useProduit()
    

    const openModal =  ()=>{
        setOpen(true)
    }
  return (
   <>
      <div className="poste flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-secondary font-semibold text-lg ">
            Ramirandava
          </span>
          <div className="nombre ml-2 w-8 h-5 bg-gray-200 rounded-full flex justify-center items-center ">
            <span className="text-xs text-primary font-semibold">{5}</span>
          </div>
        </div>
        <div className="add_employe" >
          <button className="flex items-center btn-primary" onClick={openModal}>
            <PlusCircleIcon className="w-5 h-5 text-white" />
            {
                stock=="vendu" ? "Effectuer Paiement"  : "Consommer"
            }
          </button>
        </div>
      </div>
      <div className="lien-fournisseur mt-3 flex justify-center space-x-8" >
        <button   onClick={() => setStock("vendu")}
          className={`text-lg font-semibold ${stock === "vendu" ? "text-primary border-b-2 border-[#9A4C1E]" : ""}`}>Produits Vendu </button>
        <button onClick={() => setStock("consommation")}
          className={`text-lg font-semibold ${stock === "consommation" ? "text-primary border-b-2 border-[#9A4C1E]" : ""}`}>Consommation </button>
    
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

      <AjoutProduit/>
   </>
  )
}
