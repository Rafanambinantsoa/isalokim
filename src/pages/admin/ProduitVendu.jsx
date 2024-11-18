import React from 'react'
import {
    CloudArrowDownIcon,
    CloudArrowUpIcon,
    MagnifyingGlassIcon,
    PlusCircleIcon,
  } from "@heroicons/react/24/solid";

import { NavLink } from 'react-router-dom';
export default function ProduitVendu() {
  return (
    <>
    <div className="poste flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-secondary font-semibold text-lg ">
            Produits Vendu
          </span>
          <div className="nombre ml-2 w-8 h-5 bg-gray-200 rounded-full flex justify-center items-center ">
            <span className="text-xs text-primary font-semibold">2</span>
          </div>
        </div>
        <div className="add_employe" >
          <button className="flex items-center btn-primary">
            <PlusCircleIcon className="w-5 h-5 text-white" />
            <span className="text-xs pl-1">Effectuer Payement</span>
          </button>
        </div>
      </div>
      <div className="lien-fournisseur mt-5">
      <NavLink
          to="/admin/produit"
         
        >
          <span className="text-sm font-semibold    hover:text-primary">
            Listes des produits
          </span>
        </NavLink>
        <NavLink to="/admin/produit-vendu"   className={({ isActive }) =>
            `text-sm font-semibold   border-b hover:text-primary ${
              isActive ? "text-primary font-semibold border-b-2 border-red-600" : "text-gray-500"
            }  `
          }>
          <span className="text-sm font-semibold text-secondary ml-3 hover:text-primary">
            Produits vendu
          </span>
        </NavLink>
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
    </>
  )
}
