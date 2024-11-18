import React, { useEffect } from "react";
import {
  CloudArrowDownIcon,
  CloudArrowUpIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import Table from "../../components/table/Table ";
import { useFournisseur } from "../../context/FournisseurContext";
import AjoutFournisseur from "../../components/modal/fournisseur/AjoutFournisseur";
import { NavLink } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";
import TableFournisseur from "../../components/table/TableFournisseur";
import DeleteFournisseur from "../../components/modal/fournisseur/DeleteFournisseur";
import { PlusCircle } from "lucide-react";

export default function Fournisseur() {

  const {listFournisseurs} = useAdmin()
  const { setOpen, resertForm } = useFournisseur();



  return (
    <>
      <div className="poste flex items-center justify-between">
      <div className="flex items-center ">
          <span className="text-secondary text-gray-700 text-4xl ">
            Fournisseurs
          </span>
          <div className="nombre ml-2 w-5 h-5 bg-gray-200 rounded-full flex justify-center items-center mt-2">
            <span className="text-xs text-primary font-semibold">
              {5}
            </span>
          </div>
        </div>
        <div className="add_employe">
          <button
            className="flex items-center btn-primary"
            onClick={() => {
              setOpen(true);
              resertForm();
            }}
          >
            <PlusCircle className="w-5 h-5 text-white" />
            <span className="text-xs pl-1">Ajouter Fournisseur</span>
          </button>
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
      </div>

      <div className="table-fournisseur mt-5">
        <TableFournisseur/>
      </div>

      <AjoutFournisseur />
      <DeleteFournisseur/>
    </>
  );
}
