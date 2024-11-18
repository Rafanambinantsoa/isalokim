import React, { useState } from "react";
import {
  CloudArrowUpIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  PlusIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import TableConge from "../../components/table/TableConge";
import { useAdmin } from "../../context/AdminContext";
import AjoutConge from "../../components/modal/conge/AjoutConge";
import { useConge } from "../../context/CongeContext";

import { PlusCircle } from "lucide-react";
import DeleteConge from "../../components/modal/conge/DeleteConge";


export default function Conge() {

  const {listeConge,setOpen,errors} =  useConge()
  

  const handleOpenPoste = () => {
    setOpen(true)
  };

  return (
    <>
      <div className="flex items-center ">
          <span className="text-secondary text-gray-700 text-4xl ">
           Congé
          </span>
          <div className="nombre ml-2 w-5 h-5 bg-gray-200 rounded-full flex justify-center items-center mt-2">
            <span className="text-xs text-primary font-semibold">
              {5}
            </span>
          </div>
        </div>
      <div className="mt-10 flex justify-between items-center">
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
            onClick={handleOpenPoste}
          >
            <PlusCircle className="w-5 h-5 text-white" />
            <span className=" pl-1">Ajouter congé</span>
          </button>
        </div>
      </div>
      <div className="table-conge mt-5">
        <TableConge />
      </div>
      <AjoutConge  />
     <DeleteConge/>
    </>
  );
}
