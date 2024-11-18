import React, { useEffect, useState } from "react";
import {
  CloudArrowUpIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import TablePoste from "../../components/table/TablePoste";
import AjoutPoste from "../../components/modal/poste/AjoutPoste";
import DeletePoste from "../../components/modal/poste/DeletePoste";
import { usePoste } from "../../context/PosteContext";
import { useAdmin } from "../../context/AdminContext";
export default function Poste() {
  const {poste} = useAdmin()
    const {setOpen} =  usePoste()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer); // Clear timeout on unmount
    }, []);

  return (
    <>
  <div className="flex items-center ">
          <span className="text-secondary text-gray-700 text-4xl ">
          Postes
          </span>
          <div className="nombre ml-2 w-5 h-5 bg-gray-200 rounded-full flex justify-center items-center mt-2">
            <span className="text-xs text-primary font-semibold">
              {5}
            </span>
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
            onClick={() => setOpen(true)}
          >
            <PlusCircleIcon className="w-5 h-5 text-white" />
            <span className=" pl-1">Ajouter Poste</span>
          </button>
        </div>
      </div>
      <div className="table-poste">
        <TablePoste/>
        <AjoutPoste  />
        <DeletePoste/>
      </div>
    </>
  );
}
