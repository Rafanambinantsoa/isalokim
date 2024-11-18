import React, { useState } from 'react'
import {
    CloudArrowDownIcon,
    CloudArrowUpIcon,
    MagnifyingGlassIcon,
    PlusCircleIcon,
  } from "@heroicons/react/24/solid";
import { NavLink } from 'react-router-dom';
import Table from '../../components/table/Table ';
import AjoutProduit from '../../components/modal/produit/AjoutProduit';
import { useProduit } from '../../context/ProduitContext';
import TableProduit from '../../components/table/TableProduit';
import { PlusCircle } from 'lucide-react';

export default function Produit() {
    const {setOpen,resertForm,listProduit} =  useProduit()
    const [stock, setStock] = useState("magasin"); // État pour le lieu sélectionné

    const openModal =  ()=>{
        setOpen(true)
        resertForm()
    }
  return (
   <>
    <div className="poste flex items-center justify-between">
    <div className="flex items-center ">
          <span className="text-secondary text-gray-700 text-2xl ">
            Lites des produits
          </span>
          <div className="nombre ml-2 w-5 h-5 bg-gray-200 rounded-full flex justify-center items-center mt-2">
            <span className="text-xs text-primary font-semibold">
              {5}
            </span>
          </div>
        </div>
        <div className="add_employe" >
          <button className="flex items-center btn-primary" onClick={openModal}>
            <PlusCircle className="w-5 h-5 text-white" />
            <span className=" pl-1">Ajouter produit </span>
          </button>
        </div>
      </div>
      <div className="mt-6  flex justify-between items-center">
        <div className="search flex items-center">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher"
            className="pl-2 outline-none flex-grow text-secondary text-md placeholder:text-secondary placeholder:text-sm placeholder:font-semibold"
          />
        </div>
      </div>
      <div className="table-produit mt-5">
       <TableProduit/>
      </div>
      <AjoutProduit/>
   </>
  )
}
