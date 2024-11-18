import React, { useState } from "react";
import { MagnifyingGlassIcon, PlusIcon ,BriefcaseIcon} from "@heroicons/react/24/solid";
import Card from "../../components/departement/Card";
import Modal from "../../components/modal/Modal";

export default function Role() {
  const[open,setOpen] =  useState(false)

  const onClose = ()=>{
    setOpen(false)
  }
  return (
    <>
      <div className="container px-5 flex items-center justify-between mt-5">
        <div className="departement flex items-center ">
          <span className="font-semibold text-2xrdcl ">Departement</span>
          <div className="w-5 h-5 ml-1 bg-gray-200 text-primary font-semibold rounded-full text-center">
            4
          </div>
        </div>
        <div className="boutton flex space-x-10">
          <button className="btn-secondary text-sm flex items-center">
            <PlusIcon className="w-5" />
            <span>Assign</span>
          </button>
          <button className="btn-primary text-sm flex items-center" onClick={()=>setOpen(true)}>
            <PlusIcon className="w-5" />
            <span>Ajouter departement</span>
          </button>
        </div>
      </div>
      <div className="departement-poste px-5 mt-3">
        <ul className="flex items-center space-x-5">
          <li className="text-primary font-semibold border-b border-[#6A1039] ">
            Departement
          </li>
          <li>Postes</li>
        </ul>
      </div>
      <div className="search px-5 mt-8">
        <div className="flex items-center space-x-2 border border-gray-300 py-2 w-80 rounded-full px-3">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="outline-none flex-grow text-gray-700"
          />
        </div>
      </div>
      <div className="list-posts mt-5 px-5">
        <ul className="flex items-center space-x-5">
          <li className="text-sm text-primary font-semibold border-b border-[#6A1039]">
            Tous
          </li>
          <li className="text-sm">Informatique</li>
          <li className="text-sm">Comptable</li>
          <li className="text-sm">RH</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-10  px-10 mt-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Modal open={open} width={"400px"} onClose={onClose}>
       <div className="py-3 px-5 mt-5">
        <div className="w-8 h-8 bg-red-300 flex justify-center items-center rounded-full">
        <BriefcaseIcon className='text-[#6A1039] w-[20px]' />
        </div>
        <div className="font-semibold text-lg">Creation  departement</div>
        <form action="" className="mt-5">
          <div className="form-group">
            <input type="text" className="form-control w-full" placeholder="Nom  du departement" />
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control w-full" placeholder="Nom  du departement" />
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control w-full" placeholder="Nom  du departement" />
          </div> 
          <button className="mt-8 btn btn-primary w-full">Ajouter</button>
        </form>
       </div>
      </Modal>
    </>
  );
}
