import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { PlusCircle } from 'lucide-react'
import React from 'react'

export default function ProduitToil() {
  return (
    <>
        <div className="poste flex items-center justify-between">
    <div className="flex items-center ">
          <span className="text-secondary text-gray-700 text-4xl ">
            Toils d'Isalo
          </span>
          <div className="text-secondary text-gray-700 text-2xl ml-8">
            <span>Listes des produits</span>
          </div>
          <div className="nombre ml-2 w-5 h-5 bg-gray-200 rounded-full flex justify-center items-center mt-2">
            <span className="text-xs text-primary font-semibold">
              {5}
            </span>
          </div>
        </div>
        <div className="add_employe" >
          <button className="flex items-center btn-primary" >
            <PlusCircle className="w-5 h-5 text-white" />
            <span className=" pl-1">Creér un produit</span>
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
    </>
  )
}
