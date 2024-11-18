import React from 'react'
import {
    CloudArrowUpIcon,
    MagnifyingGlassIcon,
    PlusCircleIcon,
  } from "@heroicons/react/24/solid";
import TableTransaction from '../../components/table/TableTransaction';
import { useAdmin } from '../../context/AdminContext';
import AjoutTransaction from '../../components/modal/transaction/AjoutTransaction';
export default function Transaction() {
    const {setOpenPoste} =  useAdmin()
  return (
    <>
     <div className="poste flex items-center">
        <span className="text-secondary font-semibold text-lg">Transaction</span>
        <div className="nombre ml-2 w-8 h-5 bg-gray-200 rounded-full flex justify-center items-center ">
          <span className="text-xs text-primary font-semibold">100</span>
        </div>
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
        <div className="add_employe">
          <button
            className="flex items-center btn-primary"
            onClick={() => setOpenPoste(true)}
          >
            <PlusCircleIcon className="w-5 h-5 text-white" />
            <span className="text-xs pl-1">Ajouter Transaction</span>
          </button>
        </div>
      </div>
      <div className="liste-transaction mt-5">
        <TableTransaction/>
      </div>
      <AjoutTransaction/>
    </>
  )
}
